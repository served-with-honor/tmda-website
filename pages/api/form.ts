// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { emailContactForm, logContactForm } from '../../lib';
import siteSettings from '../../src/siteSettings';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: string | undefined, error?: unknown }>
) {
  try {
    const { name, email, message } = JSON.parse(req.body) || {};
    const data = {
      subject: siteSettings.form.subject,
      html: `<table>
        <tr><td>Name:</td><td>${name}</td></tr>
        <tr><td>Email:</td><td>${email}</td></tr>
        <tr><td>Message:</td><td>${message}</td></tr>
      </table>`,
    };

    await Promise.all([
      logContactForm({ name, email, message }),
      emailContactForm(data),
    ])
    
    res.status(200).json({ data: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: undefined, error });
  }
}
