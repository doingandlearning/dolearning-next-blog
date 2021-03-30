import Link from "next/link";
import { format } from "date-fns";
import { NextSeo } from 'next-seo';

import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm"

import components from "@components/Components";
import BlogCard from "@components/BlogCard"

import { getPostBySlug, getAllPosts, getRelatedPosts, postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';
import { formatDate } from 'lib/datetime';
// import { ArticleJsonLd } from 'lib/json-ld';
import useSite from 'hooks/use-site';
import { getMetaImage } from "lib/image";

export default function BlogPost({ post, relatedPosts }) {
  const { metadata, homepage } = useSite();
  const { title: siteTitle } = metadata;

  const { title, content, excerpt, slug, date, author, categories, modifiedGmt, featuredImage, isSticky = false } = post;

  const metadataOptions = {
    compactCategories: false,
  };

  const metaDescription = `Read ${title} at ${siteTitle}.`;
  const socialImageUrl = getMetaImage(title);

  const { posts: relatedPostsList, title: relatedPostsTitle } = relatedPosts;
  console.log(relatedPosts)

  return (
    <Layout>
      <NextSeo
        title={title}
        canonical={`https://www.kevincunningham.co.uk${slug}`}
        openGraph={{
          url: `https://www.kevincunningham.co.uk/posts/${slug}`,
          title: title,
          images: [
            {
              url: socialImageUrl,
              width: 800,
              height: 600,
              alt: `Blog card for ${title}`,
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
          {title}
        </h1>
        <p className="border-t border-b my-auto py-2 text-gray-700 text-center bg-dlgrey">
          Published on {format(new Date(date), "EEEE do MMMM, y")}.
        </p>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
        <p className="border-t border-b my-auto py-2 text-gray-700 text-center bg-dlgrey">
          Last updated on {format(new Date(modifiedGmt), "EEEE do MMMM, y")}.
        </p>
        <div className="bg-primary w-full flex justify-center mx-auto mb-4">
          <EmailForm />
        </div>
      </div>
      <div>
        {!!relatedPostsList.length && (
          <div className="text-center">
            {relatedPostsTitle.name ? (
              <span className="font-bold">
                More from{' '}
                <Link href={relatedPostsTitle.link}>
                  <a>{relatedPostsTitle.name}</a>
                </Link>
              </span>
            ) : (
              <span>More Posts</span>
            )}
            <div className="grid grid-cols-3 gap-4">
              {relatedPostsList.map((post, idx) => {
                if (idx > 2) return null;
                return (
                  <div key={idx}>
                    <BlogCard blog={post} showTitle={false} />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}


export async function getStaticProps({ params = {} } = {}) {
  const { post } = await getPostBySlug(params?.slug);

  const socialImage = `/images/${params?.slug}.png`;

  const { categories, postId } = post;

  const category = categories.length && categories[0];
  let { name, slug } = category;

  return {
    props: {
      post,
      socialImage,
      relatedPosts: {
        posts: await getRelatedPosts(category, postId),
        title: {
          name: name || null,
          link: categoryPathBySlug(slug),
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const routes = {};

  const { posts } = await getAllPosts();
  const paths = posts.map((post) => {
    const { slug } = post;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}