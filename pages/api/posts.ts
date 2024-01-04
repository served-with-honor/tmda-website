import type { NextApiRequest, NextApiResponse } from 'next'
import { getPosts } from '../../lib/wordpress'

interface Category {
  name: string,
  slug: string,
  id: string,
}
interface PostPreview {
  title: string,
  excerpt: string,
  slug: string,
  date: string,
  image: string,
  categories: Category[],
}
interface Response {
  data?: {
    posts: PostPreview[],
    pageInfo: {
      hasNextPage: boolean,
      startCursor: string
      endCursor: string
      hasPreviousPage: boolean
    }
  };
  error?: unknown;
}
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Response>
) {
  try {
    const notEmptyString = a => a.trim().length > 0;
    
    let categories = null;
    const queryCategories = request.query.categories;
    const hasQueryCategories = typeof queryCategories === 'string';
    if (hasQueryCategories) categories = queryCategories.split(',').filter(notEmptyString);
    
    const first = (typeof request.query.first === 'string') ? parseInt(request.query.first) : null;
    const after = (typeof request.query.after === 'string') ? request.query.after : null
    
    const data = await getPosts({ first, after, categories });
    
    response.status(200).json({ data });
  } catch (error) {
    response.status(500).json({ error });
  }
}
