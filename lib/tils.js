import { getApolloClient } from "lib/apollo-client";

import { QUERY_ALL_TILS, getQueryTILBySlug } from "data/tils";

/**
 * getPostBySlug
 */

export async function getTILBySlug(slug) {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: getQueryTILBySlug(slug),
  });

  const til = data?.data.til;
  return {
    til,
  };
}

/**
 * getAllPosts
 */

export async function getAllTILs() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_TILS,
  });

  const tils = data?.data.tils.edges.map(({ node = {} }) => node);

  return {
    tils,
  };
}
