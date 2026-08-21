const required = (name: string): string => {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

const optional = (name: string): string | undefined => {
  const value = process.env[name]

  return value && value.length > 0 ? value : undefined
}

const number = (name: string, fallback: number): number => {
  const value = process.env[name]

  if (!value) {
    return fallback
  }

  const parsed = Number(value)

  if (!Number.isFinite(parsed) || parsed < 0) {
    throw new Error(`Invalid number for environment variable: ${name}`)
  }

  return parsed
}

const boolean = (name: string, fallback: boolean): boolean => {
  const value = process.env[name]

  if (!value) {
    return fallback
  }

  return ['1', 'true', 'yes', 'on'].includes(value.toLowerCase())
}

const list = (name: string, fallback: string[]): string[] => {
  const value = process.env[name]

  if (value === undefined) {
    return fallback
  }

  return value
    .split(',')
    .map(entry => entry.trim())
    .filter(Boolean)
}

export const config = {
  port: number('PORT', 3000),

  github: {
    token: required('GITHUB_TOKEN'),
    owner: process.env.GITHUB_OWNER ?? 'agt-guntrade',
    repo: process.env.GITHUB_REPO ?? 'shop',
    // File name of the workflow to dispatch, or its numeric id.
    workflow: process.env.GITHUB_WORKFLOW_ID ?? 'deploy.yaml',
    ref: process.env.GITHUB_REF_NAME ?? 'main'
  },

  shopify: {
    webhookSecret: required('SHOPIFY_WEBHOOK_SECRET'),
    // Optional extra check, e.g. "agt-guntrade.myshopify.com".
    shopDomain: optional('SHOPIFY_SHOP_DOMAIN'),
    // Empty list means: react to every topic Shopify sends us.
    topics: list('SHOPIFY_TOPICS', [
      'products/create',
      'products/update',
      'products/delete',
      'collections/create',
      'collections/update',
      'collections/delete'
    ])
  },

  deploy: {
    // Wait for this much silence before dispatching, so a bulk product
    // import does not queue one build per product.
    debounceMs: number('DEPLOY_DEBOUNCE_MS', 5 * 60 * 1000),
    // ... but never postpone a deploy longer than this.
    maxWaitMs: number('DEPLOY_MAX_WAIT_MS', 30 * 60 * 1000),
    // Poll interval while an older run is still building.
    recheckMs: number('DEPLOY_RECHECK_MS', 60 * 1000),
    // Do not stack builds on top of a running one.
    skipWhileRunning: boolean('DEPLOY_SKIP_WHILE_RUNNING', true)
  },

  contact: {
    // The contact endpoint stays disabled until SMTP_HOST is configured.
    smtp: {
      host: optional('SMTP_HOST'),
      port: number('SMTP_PORT', 587),
      // Implicit TLS (port 465). Port 587 upgrades via STARTTLS instead.
      secure: boolean('SMTP_SECURE', false),
      user: optional('SMTP_USER'),
      password: optional('SMTP_PASSWORD')
    },
    from: process.env.CONTACT_MAIL_FROM ?? 'website@agt-guntrade.at',
    to: list('CONTACT_MAIL_TO', ['info@agt-guntrade.at']),
    subjectPrefix: process.env.CONTACT_SUBJECT_PREFIX ?? '[Website]',
    // Browsers send the form cross-origin, so the shop domains need CORS.
    allowedOrigins: list('CONTACT_ALLOWED_ORIGINS', [
      'https://www.agt-guntrade.at',
      'https://agt-guntrade.at',
      'http://localhost:8000'
    ]),
    // Per IP, sliding window.
    rateLimit: {
      max: number('CONTACT_RATE_LIMIT', 5),
      windowMs: number('CONTACT_RATE_LIMIT_WINDOW_MS', 10 * 60 * 1000)
    }
  },

  // Optional bearer token for the manual POST /deploy endpoint.
  triggerToken: optional('TRIGGER_TOKEN')
}

export type Config = typeof config
