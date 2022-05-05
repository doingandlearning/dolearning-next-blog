import { gql } from "@apollo/client";

export const QUERY_ALL_EGGHEAD_COURSES = gql`
  query {
    eggheads {
      nodes {
        recordedCourse {
          cta
          image {
            altText
            sourceUrl(size: LARGE)
          }
          title
          link
          order
        }
      }
    }
  }
`;
