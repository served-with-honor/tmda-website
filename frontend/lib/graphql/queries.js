import { PostFragment, CategoryFragment } from "./fragments";

export const GetCategoriesQuery = `
  query Categories {
    categories {
      nodes {
        ...CategoryAttributes
      }
    }
  }
  ${CategoryFragment}
`;

export const GetCategoryQuery = `
  query Category($id: ID = "", $idType: CategoryIdType = SLUG) {
    category(id: $id, idType: $idType) {
      ...CategoryAttributes
    }
  }
  ${CategoryFragment}
`;

export const GetPostQuery = `
  query Post (
    $id: ID = "",
    $asPreview: Boolean = false,
    $idType: PostIdType = SLUG,
  )
  {
    post(
      id: $id,
      asPreview: $asPreview,
      idType: $idType
    ) {
      content(format: RENDERED)
      ...PostAttributes
      author {
        node {
          name
          userInfo {
            photoUrl {
              node {
                sourceUrl
              }
            }
          }
        }
      }
      articles {
      reviewed {
        reviewer {
          nodes {
            name
            description
          }
        }
        date
      }
    }
    }
  }
  ${PostFragment}
`;

export const GetPostsQuery = `
  query AllPosts(
    $first: Int, 
    $after: String, 
    $categoryIn: [ID]
  ) {
    posts(
      first: $first
      where: {
        status: PUBLISH
        orderby: {field: DATE, order: DESC}
        categoryIn: $categoryIn
      }
      after: $after
    ) {
      nodes {
        ...PostAttributes
        slug
        excerpt(format:RENDERED)
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
    }
  }
  ${PostFragment}
`;
