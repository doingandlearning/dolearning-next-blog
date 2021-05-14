import { gql } from "@apollo/client";

export const QUERY_ALL_TILS = gql`
  {
    tils(first: 10000) {
      edges {
        node {
          id
          date
          modified
          modifiedGmt
          id
          title
          slug
          tilId
          status
          topics {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;

export function getQueryTILBySlug(slug) {
  return gql`
  {
    til(id: "${slug}", idType: SLUG) {
      id
      content
      date
      modified
      modifiedGmt
      tilId
      title
      slug
      topics {
        nodes {
          name
        }
      }
    }
  }
  `;
}
