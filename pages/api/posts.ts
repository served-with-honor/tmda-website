import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from '../../lib/api'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ data: string | undefined, error?: unknown }>
) {
  try {
    const count = parseInt(request.query.count.toString());
     const data = await getPosts({ count });
    response.status(200).json({ data });
  } catch (error) {
    response.status(500).json({ data: undefined, error });
  }
}
