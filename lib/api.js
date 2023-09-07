const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
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

export async function getPosts({
  preview = false,
  first = 10,
  after = '',
  tags
} = {}) {
  return await fetchAPI(`
    query AllPosts($first: Int = 10, $after: String = "") {
      posts(
        first: $first
        where: {
          status: PUBLISH
          ${tags ? `tagSlugIn: ["${tags.join('","')}"],` : ''}
          orderby: {field: DATE, order: DESC}
        }
        after: $after
      ) {
        nodes {
          title
          excerpt(format:RAW)
          slug
          date
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
}

export async function getPost(idSlug) {
  
  const data = await fetchAPI(
    `
      query NewQuery {
        post(idType: SLUG, id: "${idSlug}") {
          content(format: RENDERED)
          title
          featuredImage {
            node {
              mediaItemUrl
              altText
            }
          }
          tags {
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
  )
	data.post.author = {
		name: data.post.author.node.name,
		image: data.post.author.node.avatar.url,
	};
	data.post.tags = data.post.tags.nodes;
	data.post.featuredImage = data.post.featuredImage.node.mediaItemUrl;
  return data
}

export async function getTags(count = 10) {
  
  const data = await fetchAPI(
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
