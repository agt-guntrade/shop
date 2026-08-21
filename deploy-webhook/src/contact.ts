import {config} from './config.js'
import type {ContactMessage} from './mailer.js'

const MAX_LENGTHS: Record<string, number> = {
  firstName: 100,
  lastName: 100,
  email: 200,
  phone: 50,
  message: 5000,
  invokedOnUrl: 500
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const text = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : ''

export interface ParseResult {
  message?: ContactMessage
  errors: string[]
  /** Honeypot was filled - pretend success, but do not send anything. */
  trapped: boolean
}

export const parseContactPayload = (payload: unknown): ParseResult => {
  const errors: string[] = []

  if (typeof payload !== 'object' || payload === null) {
    return {errors: ['Invalid payload'], trapped: false}
  }

  const body = payload as Record<string, unknown>

  // Bots fill every field they find; the form leaves this one empty.
  if (text(body.company).length > 0) {
    return {errors: [], trapped: true}
  }

  const message: ContactMessage = {
    firstName: text(body.firstName),
    lastName: text(body.lastName),
    email: text(body.email),
    phone: text(body.phone) || undefined,
    message: text(body.message),
    invokedOnUrl: text(body.invokedOnUrl) || undefined
  }

  for (const field of ['firstName', 'lastName', 'email', 'message'] as const) {
    if (!message[field]) {
      errors.push(`${field} is required`)
    }
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = message[field as keyof ContactMessage]

    if (typeof value === 'string' && value.length > max) {
      errors.push(`${field} exceeds ${max} characters`)
    }
  }

  if (message.email && !EMAIL_PATTERN.test(message.email)) {
    errors.push('email is invalid')
  }

  if (body.agreeToTerms !== true) {
    errors.push('agreeToTerms must be accepted')
  }

  if (errors.length > 0) {
    return {errors, trapped: false}
  }

  return {message, errors, trapped: false}
}

const hits = new Map<string, number[]>()

/** Sliding window rate limit per client, kept in memory. */
export const isRateLimited = (client: string): boolean => {
  const now = Date.now()
  const windowStart = now - config.contact.rateLimit.windowMs
  const recent = (hits.get(client) ?? []).filter(at => at > windowStart)

  if (recent.length >= config.contact.rateLimit.max) {
    hits.set(client, recent)

    return true
  }

  recent.push(now)
  hits.set(client, recent)

  // Opportunistic cleanup so the map does not grow unbounded.
  if (hits.size > 1000) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every(at => at <= windowStart)) {
        hits.delete(key)
      }
    }
  }

  return false
}
