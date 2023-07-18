import type { NextApiRequest, NextApiResponse } from 'next'
import { getFooterPosts } from '../../lib/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: string | undefined, error?: unknown }>
) {
  try {
    const data = await getFooterPosts();
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ data: undefined, error });
  }
}
