import { decode } from 'html-entities';
import constants from '../src/constants';

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
  preview = false,
  first = 10,
  after = '',
  tags,
  categories,
} = {}) {
  const response = await fetchWP(`
    query AllPosts($first: Int = 10, $after: String = "") {
      posts(
        first: $first
        where: {
          status: PUBLISH
          ${categories && categories.length > 0 ? `categoryIn: ["${categories.join('","')}"],` : ''}
          ${tags && tags.length > 0 ? `tagSlugIn: ["${tags.join('","')}"],` : ''}
          orderby: {field: DATE, order: DESC}
        }
        after: $after
      ) {
        nodes {
          title
          excerpt(format:RENDERED)
          slug
          date
          author {
            node {
              name
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
            }
          }
          tags {
            edges {
              node {
                name
                slug
              }
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
        pageInfo {
          hasNextPage
          startCursor
          endCursor
          hasPreviousPage
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
        first,
        after,
      },
    }
  );

  response.posts.nodes = response.posts.nodes.map(post => ({
    title: post.title,
    // change HTML entities to unicode and strip HTML tags
    excerpt: decode(post.excerpt).replace( /(<([^>]+)>)/ig, ''),
    slug: post.slug,
    date: post.date,
    image: post.featuredImage?.node?.mediaItemUrl,
    categories: post.categories.edges?.map(a => a.node),
    author: post.author.node.name,
  }));

  return response
}

async function getPost({ id, slug, preview = false }) {
  const type = id ? 'DATABASE_ID' : slug ? 'SLUG' : null;
  const idSlug = id || slug;
  const [{ post }, metadata] = await Promise.all([
    fetchWP(
      `
        query NewQuery {
          post(idType: ${type}, id: "${idSlug}", asPreview: ${preview}) {
            content(format: RENDERED)
            title
            featuredImage {
              node {
                mediaItemUrl
                altText
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            date
            modified
          }
        }
      `,
    ),
    getPostMetaData(idSlug),
  ]);
  post.metadata = metadata;

	post.author = {
		name: post.author.node.name,
		image: post.author.node.avatar.url,
	};
	post.categories = post.categories.nodes;
	post.featuredImage = post.featuredImage.node.mediaItemUrl;
  return post;
}

async function getPostMetaData(slug) {
	try {
		const postUrl = `${constants.wordpress.posts}/${id}`;
    const response = await fetch(`${constants.wordpress.rankmath}?url=${postUrl}`);
    if (!response.ok) {
      const { message } = await response.json();
      throw new Error(`$Failed to get Rankmath data for post ${postUrl}: {response.status} - ${message}`);
    }
		
    const { head } = await response.json();
		return head;
	}	catch (error) {
		console.log(error);
		return null;
	}
}

async function getTags(count = 0) {
  
  const data = await fetchWP(
    `
    query GetTagNodes {
      tags(first: ${count}) {
        nodes {
          slug
          name
        }
      }
    }
  `
  )

  return data
}

async function getCategories(count = 0) {
  
  const data = await fetchWP(
    `
    query GetCategoriesNodes {
      categories(first: ${count}) {
        nodes {
          id
          slug
          name
        }
      }
    }
  `
  )

  return data
}

async function getCategory(slug) {
  return await fetchWP(`{
    category(id: "${slug}", idType: SLUG) {
      id
      name
      slug
    }
  }`);
}

export {
  getPosts,
  getPost,
  getPostMetaData,
  getTags,
  getCategories,
  getCategory,
}