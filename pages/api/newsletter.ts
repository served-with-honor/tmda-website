// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import settings from '../../src/siteSettings';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ data?: string | undefined, error?: unknown }>
) {
  try {
    const { email } = JSON.parse(request.body) || {};

    const url = new URL(`https://${process.env.MAILCHIMP_COMPANY}.${process.env.MAILCHIMP_SERVER}.list-manage.com/subscribe/post-json`);
    url.search = new URLSearchParams({
      u: process.env.MAILCHIMP_USER_ID,
      id: process.env.MAILCHIMP_AUDIENCE_ID,
      EMAIL: email,
      tags: settings.mailchimp.tags.join(','),
    }).toString();

    const result = await fetch(url, { method: 'POST' });
    const body = await result.json();
    
    if (!result.ok) {
      if (body.error) throw Error(body.error);  
      throw Error(`${result.status}: ${result.statusText}`);
    }

    if (body.result !== "success") throw Error(body.msg);
    
    return response.status(200).json({ data: 'success' });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
