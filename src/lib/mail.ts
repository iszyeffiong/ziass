"use server";
import { createServerFn } from '@tanstack/react-start'
import nodemailer from 'nodemailer'

// Using direct process.env access
// NOTE: You MUST restart your dev server (npm run dev) after editing your .env file!
export const sendContactEmail = createServerFn({
  method: 'POST',
})
.handler(async (ctx: any) => {
  const data = ctx.data || ctx
  
  // Explicitly pull from process.env with no hardcoded fallbacks to ensure it uses your .env file
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT) || 587
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const recipients = process.env.CONTACT_EMAIL || 'support@ziass.ca, kazeem@ziass.ca'

  if (!host || !user || !pass) {
    console.error('Missing email configuration in .env file:', { host, user, hasPass: !!pass })
    throw new Error('Server configuration error. Please check the .env file.')
  }
  
  try {
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465,
      auth: {
        user: user,
        pass: pass,
      },
    })

    const mailOptions = {
      from: `"${data.fullName}" <${user}>`,
      to: recipients,
      replyTo: data.email,
      subject: `New Service Enquiry from ${data.fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #006837; color: white; padding: 24px; text-align: center;">
            <h2 style="margin: 0;">New Service Enquiry</h2>
          </div>
          <div style="padding: 24px; color: #1e293b;">
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Services:</strong> ${Array.isArray(data.services) ? data.services.join(', ') : data.services}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
            This email was sent from the ZIASS contact form.
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error: any) {
    console.error('Error sending email:', error)
    throw new Error(error.message || 'Failed to send message.')
  }
})
