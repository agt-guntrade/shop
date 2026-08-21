import {createTransport, type Transporter} from 'nodemailer'

import {config} from './config.js'

export interface ContactMessage {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  invokedOnUrl?: string
}

export const isContactEnabled = (): boolean =>
  Boolean(config.contact.smtp.host)

let transporter: Transporter | null = null

const getTransporter = (): Transporter => {
  if (transporter) {
    return transporter
  }

  const {host, port, secure, user, password} = config.contact.smtp

  if (!host) {
    throw new Error('SMTP_HOST is not configured')
  }

  transporter = createTransport({
    host,
    port,
    secure,
    auth: user && password ? {user, pass: password} : undefined
  })

  return transporter
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const renderText = (message: ContactMessage): string =>
  [
    `Name: ${message.firstName} ${message.lastName}`,
    `E-Mail: ${message.email}`,
    `Telefon: ${message.phone || '-'}`,
    `Seite: ${message.invokedOnUrl || '-'}`,
    '',
    message.message
  ].join('\n')

const renderHtml = (message: ContactMessage): string => {
  const row = (label: string, value: string): string =>
    `<tr><td style="padding:4px 12px 4px 0;color:#666;">${label}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`

  return `<div style="font-family:sans-serif;font-size:14px;line-height:1.5;">
  <table style="border-collapse:collapse;margin-bottom:16px;">
    ${row('Name', `${message.firstName} ${message.lastName}`)}
    ${row('E-Mail', message.email)}
    ${row('Telefon', message.phone || '-')}
    ${row('Seite', message.invokedOnUrl || '-')}
  </table>
  <div style="white-space:pre-wrap;">${escapeHtml(message.message)}</div>
</div>`
}

export const sendContactMail = async (
  message: ContactMessage
): Promise<string> => {
  const info = await getTransporter().sendMail({
    from: config.contact.from,
    to: config.contact.to,
    // Replying in the mail client answers the customer directly.
    replyTo: `${message.firstName} ${message.lastName} <${message.email}>`,
    subject: `${config.contact.subjectPrefix} Kontaktanfrage von ${message.firstName} ${message.lastName}`,
    text: renderText(message),
    html: renderHtml(message)
  })

  return info.messageId
}

/** Checks the SMTP credentials, used once on startup. */
export const verifyTransport = async (): Promise<void> => {
  await getTransporter().verify()
}
