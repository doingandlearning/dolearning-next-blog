import Layout from "@components/Layout";
import { BLOG_CONTENT_PATH } from "@config/constants";
import { getMdxContent } from "@utils/get-mdx-content";
import React from "react";
import Image from "next/image";

export default function Blog({ allMdx }) {
  const [filteredBlogs, setFilteredBlogs] = React.useState(
    allMdx.sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  const handleFilter = (data) => {
    setFilteredBlogs(data);
  };
  return (
    <Layout>
      <div className="grid gap-x-2 grid-cols-3 m-2">
        {filteredBlogs?.map((blog) => (
          <div key={blog.slug}>
            <Image
              src={`https://hungry-brattain-538c0b.netlify.app/opengraph?title=${blog.title}`}
              height="200"
              width="400"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getMdxContent(BLOG_CONTENT_PATH);

  const allMdx = posts.map((post) => ({
    slug: post.slug,
    ...post.data,
  }));
  return {
    props: { allMdx },
  };
}
