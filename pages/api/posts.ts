import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from '../../lib/api'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ data?: string, error?: unknown }>
) {
  try {
    const { tags } = request.query;
    const first = (typeof request.query.first === 'string') ? parseInt(request.query.first) : null;
    const after = (typeof request.query.after === 'string') ? request.query.after : null
    const data = await getPosts({ first, after, tags });
    response.status(200).json({ data });
  } catch (error) {
    response.status(500).json({ error });
  }
}
