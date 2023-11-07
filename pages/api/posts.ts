import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from '../../lib/wordpress'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ data?: string, error?: unknown }>
) {
  try {
    const notEmptyString = a => a.trim().length > 0;

    let { categories, tags } = request.query;

    if (categories) {
      if (typeof categories === 'string') categories = categories.split(',');
      categories = categories.filter(notEmptyString);
    }
    
    if (tags) {
      if (typeof tags === 'string') tags = tags.split(',');
      tags = tags.filter(notEmptyString);
    }
    
    const first = (typeof request.query.first === 'string') ? parseInt(request.query.first) : null;
    const after = (typeof request.query.after === 'string') ? request.query.after : null
    const data = await getPosts({ first, after, tags, categories });
    response.status(200).json({ data });
  } catch (error) {
    response.status(500).json({ error });
  }
}
