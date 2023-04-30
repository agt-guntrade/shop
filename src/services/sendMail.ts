import {sq} from '@snek-functions/origin'
import {doNotConvertToString} from 'snek-query'

export const sendEmail = async (data: {
  fromEmail: string
  name: string
  subject: string
  message: string
}) => {
  const [_, errors] = await sq.mutate(m =>
    m.mailpressMailSchedule({
      envelope: {
        replyTo: {
          value: data.fromEmail,
          type: doNotConvertToString('EMAIL_ADDRESS') as any
        }
      },
      template: {
        id: 'AGT_CONTACT_MAIL',
        values: {
          name: data.name,
          email: data.fromEmail,
          message: data.message,
          invokedOnUrl: window.location.href
        }
      }
    })
  )

  if (errors) {
    return false
  }

  return true
}
