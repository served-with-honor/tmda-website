const CategoryFragment = `
  fragment CategoryAttributes on Category {
    id
    name
    slug
  }
`;

const PostFragment = `
  fragment PostAttributes on Post {
    title
    date
    modified
    featuredImage {
      node {
        mediaItemUrl
        altText
      }
    }
    categories {
      nodes {
        ...CategoryAttributes
      }
    }
  }
  ${CategoryFragment}
`;

export {
  CategoryFragment,
  PostFragment,
};
