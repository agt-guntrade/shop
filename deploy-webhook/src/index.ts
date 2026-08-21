import {serve} from '@hono/node-server'
import {getConnInfo} from '@hono/node-server/conninfo'
import {Hono} from 'hono'
import {cors} from 'hono/cors'

import {config} from './config.js'
import {isRateLimited, parseContactPayload} from './contact.js'
import {getState, requestDeploy, requestDeployNow} from './deploy-queue.js'
import {isContactEnabled, sendContactMail, verifyTransport} from './mailer.js'
import {isValidShopifySignature} from './shopify.js'

const app = new Hono()

const log = (message: string, extra: Record<string, unknown> = {}): void => {
  console.log(JSON.stringify({at: new Date().toISOString(), message, ...extra}))
}

app.get('/health', c => c.json({status: 'ok'}))

app.get('/status', c =>
  c.json({
    target: {
      repo: `${config.github.owner}/${config.github.repo}`,
      workflow: config.github.workflow,
      ref: config.github.ref
    },
    debounceMs: config.deploy.debounceMs,
    maxWaitMs: config.deploy.maxWaitMs,
    contact: isContactEnabled(),
    queue: getState()
  })
)

app.post('/webhooks/shopify', async c => {
  // The signature covers the raw body, so read it as text before parsing.
  const rawBody = await c.req.text()

  if (
    !isValidShopifySignature(
      rawBody,
      c.req.header('x-shopify-hmac-sha256'),
      config.shopify.webhookSecret
    )
  ) {
    return c.json({error: 'invalid signature'}, 401)
  }

  const shopDomain = c.req.header('x-shopify-shop-domain')

  if (config.shopify.shopDomain && shopDomain !== config.shopify.shopDomain) {
    return c.json({error: 'unexpected shop domain'}, 401)
  }

  const topic = c.req.header('x-shopify-topic') ?? 'unknown'

  if (
    config.shopify.topics.length > 0 &&
    !config.shopify.topics.includes(topic)
  ) {
    return c.json({status: 'ignored', topic}, 202)
  }

  const queue = requestDeploy(topic)

  return c.json({status: 'queued', topic, queue}, 202)
})

// Manual trigger, handy for testing the GitHub side without Shopify.
app.post('/deploy', c => {
  if (!config.triggerToken) {
    return c.json({error: 'manual trigger disabled'}, 404)
  }

  if (c.req.header('authorization') !== `Bearer ${config.triggerToken}`) {
    return c.json({error: 'unauthorized'}, 401)
  }

  return c.json({status: 'queued', queue: requestDeployNow('manual')}, 202)
})

// Called by the contact modal in the Gatsby frontend.
app.use(
  '/contact',
  cors({
    origin: config.contact.allowedOrigins,
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['content-type'],
    maxAge: 86400
  })
)

app.post('/contact', async c => {
  if (!isContactEnabled()) {
    return c.json({error: 'contact endpoint disabled'}, 404)
  }

  // Coolify's proxy sets X-Forwarded-For; the socket address is the
  // fallback when the service is reached directly.
  const client =
    c.req.header('cf-connecting-ip') ??
    c.req.header('x-forwarded-for')?.split(',')[0]?.trim() ??
    getConnInfo(c).remote.address ??
    'unknown'

  if (isRateLimited(client)) {
    return c.json({error: 'too many requests'}, 429)
  }

  let payload: unknown

  try {
    payload = await c.req.json()
  } catch {
    return c.json({error: 'invalid json'}, 400)
  }

  const {message, errors, trapped} = parseContactPayload(payload)

  if (trapped) {
    log('contact honeypot triggered', {client})

    return c.json({status: 'sent'}, 202)
  }

  if (!message) {
    return c.json({error: 'validation failed', details: errors}, 400)
  }

  try {
    const messageId = await sendContactMail(message)

    log('contact mail sent', {messageId, from: message.email})

    return c.json({status: 'sent'}, 202)
  } catch (error) {
    log('contact mail failed', {
      error: error instanceof Error ? error.message : String(error)
    })

    return c.json({error: 'delivery failed'}, 502)
  }
})

app.notFound(c => c.json({error: 'not found'}, 404))

app.onError((error, c) => {
  console.error(error)

  return c.json({error: 'internal error'}, 500)
})

serve({fetch: app.fetch, port: config.port, hostname: '0.0.0.0'}, info => {
  log('deploy webhook listening', {
    port: info.port,
    repo: `${config.github.owner}/${config.github.repo}`,
    workflow: config.github.workflow,
    ref: config.github.ref,
    contact: isContactEnabled()
  })
})

if (isContactEnabled()) {
  // Surface bad SMTP credentials at boot instead of on the first enquiry.
  verifyTransport().then(
    () => log('smtp connection verified', {host: config.contact.smtp.host}),
    (error: unknown) =>
      log('smtp verification failed', {
        error: error instanceof Error ? error.message : String(error)
      })
  )
}
