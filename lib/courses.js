import { QUERY_ALL_EGGHEAD_COURSES } from "data/courses";
import { getApolloClient } from "./apollo-client";

export async function getAllEgghead() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_EGGHEAD_COURSES,
  });

  return {
    courses: data?.data?.eggheads?.nodes || [],
  };
}
