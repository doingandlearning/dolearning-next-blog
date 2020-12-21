import hydrate from "next-mdx-remote/hydrate";
import { format } from "date-fns";
import { NextSeo } from 'next-seo';

import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm"

import { BLOG_CONTENT_PATH } from "@config/constants";
import { getMdxContent } from "@utils/get-mdx-content";
import components from "@components/Components";

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, { components });
  return (
    <Layout>
      <NextSeo
        title={frontMatter.title}
        canonical={`https://www.kevincunningham.co.uk${frontMatter.path}`}
        openGraph={{
          url: `https://www.kevincunningham.co.uk${frontMatter.path}`,
          title: frontMatter.title,
          images: [
            {
              url: `https://hungry-brattain-538c0b.netlify.app/opengraph?title=${frontMatter.title}`,
              width: 800,
              height: 600,
              alt: `Blog card for ${frontMatter.title}`,
            }
          ],
          site_name: "Kevin Cunningham",
        }}
        twitter={{
          handle: '@dolearning',
          site: 'https://www.kevincunningham.co.uk',
          cardType: 'summary_large_image',
        }}
      />
      <div>
        <h1 className="text-4xl text-center text-dlblue font-bold py-4">
          {frontMatter.title}
        </h1>
        <p className="border-t border-b my-auto py-2 text-gray-700 text-center bg-dlgrey">
          Last updated on {format(new Date(frontMatter.date), "EEEE do MMMM, y")}.
        </p>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">
          {content}
        </div>
        <div className="bg-primary w-full flex justify-center mx-auto mb-4">
          <EmailForm />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const paths = posts.map((item) => `/posts/${item.data.path.split("/")[2]}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);
  const postSlug = slug.join("/");
  const [post] = posts.filter(
    (post) =>
      post.data.path === `/posts/${postSlug}/` ||
      post.data.path === `/posts/${postSlug}`
  );
  if (!post) {
    console.warn(`No content found for slug ${postSlug}`);
  }

  return {
    props: {
      mdxSource: post.mdx,
      frontMatter: post.data,
    },
  };
}
