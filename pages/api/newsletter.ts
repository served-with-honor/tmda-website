// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { newsletterSignup } from '../../lib';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: string | undefined, error?: unknown }>
) {
  try {
    const { email } = JSON.parse(req.body) || {};
    
    await newsletterSignup(email);
    
    res.status(200).json({ data: 'success' });
  } catch (error) {
    res.status(500).json({ data: undefined, error });
  }
}
