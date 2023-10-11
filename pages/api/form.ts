// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { emailContactForm, logContactForm } from '../../lib';
import siteSettings from '../../src/siteSettings';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: string | undefined, error?: unknown }>
) {
  try {
    const { firstName, lastName, phone, type, email, message } = JSON.parse(req.body) || {};
    const data = {
      subject: siteSettings.contact.form.subject,
      html: `<table>
        <tr><td>Name:</td><td>${firstName} ${lastName}</td></tr>
        <tr><td>Phone:</td><td>${phone}</td></tr>
        <tr><td>Email:</td><td>${email}</td></tr>
        <tr><td>Request Type:</td><td>${type}</td></tr>
        <tr><td>Message:</td><td>${message}</td></tr>
      </table>`,
    };

    await Promise.all([
      logContactForm({ firstName, lastName, phone, email, type, message }),
      emailContactForm(data),
    ])
    
    res.status(200).json({ data: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: undefined, error });
  }
}
