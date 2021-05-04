import Layout from "components/Layout"
import { getAllPages, getContentAndFields } from "lib/pages"

import Error from "next/error"

export default function PageWithAcfComponents({ pageData }) {
  if (!pageData) {
    return <Error statusCode={404} />
  }

  const { content, frontPanelFields } = pageData;

  return <Layout>
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  </Layout>
}


export async function getStaticProps({ params = {} } = {}) {
  const slug = params?.slug;
  const pageData = await getContentAndFields(slug)
  return {
    props: {
      pageData
    }
  }
}

export async function getStaticPaths() {
  const { pages } = await getAllPages();

  const paths = pages.map((page) => {
    const { slug } = page;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}