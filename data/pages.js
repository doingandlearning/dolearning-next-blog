import { gql } from '@apollo/client';

export const QUERY_HOME_PAGE = gql`
{
  page(id: "cG9zdDoyMDY=") {
    id
    acf {
      fieldGroupName
      feature {
        fieldGroupName
        callout
        button {
          destination
          text
        }
        image {
          altText
          sourceUrl
        }
        text
        title
        socialLinks{
          link
          logo {
            sourceUrl
            altText
          }
        }
      }
      rows {
        ... on Page_Acf_Rows_Block {
          fieldGroupName
          text
          reverse
          mainButton {
            destination
            fieldGroupName
            text
          }
          posts {
            post {
              ... on Post {
                id
                slug
                title
              }
            }
            fieldGroupName
          }
          secondButton {
            destination
            fieldGroupName
            text
          }
          title
        }
        ... on Page_Acf_Rows_Newsletter {
          eyebrow
          fieldGroupName
          heading
          mailingList
        }
      }
    }
  }
}
`

export const QUERY_ALL_PAGES = gql`
  {
    pages(first: 10000) {
      edges {
        node {
          children {
            edges {
              node {
                id
                slug
                uri
                ... on Page {
                  id
                  title
                }
              }
            }
          }
          content
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          id
          menuOrder
          parent {
            node {
              id
              slug
              uri
              ... on Page {
                title
              }
            }
          }
          slug
          title
          uri
        }
      }
    }
  }
`;

export function getQueryPageById(id) {
  return gql`
    query {
      page(id: "${id}") {
        children {
          edges {
            node {
              id
              slug
              uri
              ... on Page {
                id
                title
              }
            }
          }
        }
        content
        featuredImage {
          node {
            altText
            caption
            id
            sizes
            sourceUrl
            srcSet
          }
        }
        id
        menuOrder
        parent {
          node {
            id
            slug
            uri
            ... on Page {
              title
            }
          }
        }
        slug
        title
        uri
      }
    }
  `;
}

export function getQueryPageByUri(uri) {
  return gql`
    query {
      pageBy(uri: "${uri}") {
        children {
          edges {
            node {
              id
              slug
              uri
              ... on Page {
                id
                title
              }
            }
          }
        }
        content
        featuredImage {
          node {
            altText
            caption
            id
            sizes
            sourceUrl
            srcSet
          }
        }
        id
        menuOrder
        parent {
          node {
            id
            slug
            uri
            ... on Page {
              title
            }
          }
        }
        slug
        title
        uri
      }
    }
  `;
}
