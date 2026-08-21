import {createHash, createHmac, timingSafeEqual} from 'node:crypto'

/**
 * Shopify signs the raw request body with the webhook signing secret and
 * sends the base64 digest in the X-Shopify-Hmac-Sha256 header.
 */
export const isValidShopifySignature = (
  rawBody: string,
  headerValue: string | undefined,
  secret: string
): boolean => {
  if (!headerValue) {
    return false
  }

  const expected = createHmac('sha256', secret).update(rawBody, 'utf8').digest()
  const received = Buffer.from(headerValue, 'base64')

  if (received.length !== expected.length) {
    return false
  }

  return timingSafeEqual(expected, received)
}

/**
 * Short, non-reversible fingerprint of the configured secret. Lets you compare
 * what the server runs with against what you pasted, without logging either.
 */
export const secretFingerprint = (secret: string): string =>
  createHash('sha256').update(secret, 'utf8').digest('hex').slice(0, 8)
