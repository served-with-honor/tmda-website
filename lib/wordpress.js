import { decode } from 'html-entities';
import constants from '../src/constants';
import { GetPostsQuery, GetPostQuery, GetCategoryQuery, GetCategoriesQuery } from './graphql/queries';

async function fetchWP(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(constants.wordpress.graphql, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

async function getPosts({
  first = 10,
  after = '',
  categories = [],
} = {}) {
  try {
    const response = await fetchWP(GetPostsQuery, {
      variables: {
        first,
        after,
        onlyEnabled: true,
        categoryIn: categories,
      }
    });
    const { nodes, pageInfo } = response.posts;

    const posts = nodes.map(post => ({
      title: post.title,
      // change HTML entities to unicode and strip HTML tags
      excerpt: decode(post.excerpt).replace(/(<([^>]+)>)/ig, ''),
      slug: post.slug,
      date: post.date,
      image: post.featuredImage?.node?.mediaItemUrl,
      categories: post.categories.nodes,
    }));

    return { posts, pageInfo };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

async function getPost(id, { idType, asPreview } = { idType: 'SLUG', asPreview: false }) {
  try {
    const [{ post }, metadata] = await Promise.all([
      fetchWP(GetPostQuery, { variables: { id, idType, asPreview } }),
      getPostMetaData(id, idType),
    ]);
    
    post.metadata = metadata;

    post.author = {
      name: post.author.node.name,
      image: post.author.node.avatar.url,
    };
    post.categories = post.categories.nodes;
    post.featuredImage = post.featuredImage.node.mediaItemUrl;
    return post;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getPostMetaData(id, idType) {
  // TODO - handle slugs or ids
	try {
		const postUrl = `${constants.wordpress.posts}/${id}`;
    const response = await fetch(`${constants.wordpress.rankmath}?url=${postUrl}`);
    
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(`Failed to get Rankmath data for post ${postUrl}: ${response.status} - ${message}`);
    }
		
    const { head } = await response.json();
		return head;
	}	catch (error) {
		console.log(error);
		return null;
	}
}

async function getCategories() {
  const { categories } = await fetchWP(GetCategoriesQuery)
  return categories.nodes
}

async function getCategory(id, { idType } = { idType: 'SLUG' }) {
  const { category } = await fetchWP(GetCategoryQuery, { variables: { id, idType } });
  return category;
}

export {
  getPosts,
  getPost,
  getPostMetaData,
  getCategories,
  getCategory,
}