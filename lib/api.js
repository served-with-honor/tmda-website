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

export async function getFooterPosts() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 4, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: true,
        preview: false,
      },
    }
  )

  return data
}
export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 3, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
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
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  const posts = data.posts.edges.map(post => ({
		title: post?.node?.title,
		excerpt: post?.node?.excerpt,
		slug: post?.node?.slug,
		date: post?.node?.date,
		image: post?.node?.featuredImage?.node?.mediaItemUrl,
		categories: post?.node?.categories.edges?.map(a => a.node),
		tags: post?.node?.tags.edges?.map(a => a.node),
  }));
  
  return posts
}
export async function getPosts(preview = false, { count = 3 } = {}) {
  
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: ${count}, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
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
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data
}
