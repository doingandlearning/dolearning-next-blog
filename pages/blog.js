import Layout from "@components/Layout";
import BlogCard from "@components/BlogCard";
import Modal from "@components/Modal";
import EmailForm from "@components/EmailForm";
import { BLOG_CONTENT_PATH } from "@config/constants";
import { getMdxContent } from "@utils/get-mdx-content";
import React from "react";
import Image from "next/image";
import Fuse from "fuse.js";

export default function Blog({ allMdx }) {
  const [term, setTerm] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const initial = allMdx.sort((a, b) => new Date(b.date) - new Date(a.date));
  const fuse = new Fuse(allMdx, {
    keys: ["title", "description", "tags"],
    threshold: 0.2,
  });

  const [filteredBlogs, setFilteredBlogs] = React.useState(initial);

  React.useEffect(() => {
    if (term === "") {
      setFilteredBlogs(initial);
      return;
    }
    setFilteredBlogs(fuse.search(term).map((item) => item.item));
  }, [term]);

  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid="1697448" />
      </Modal>
      <div className="justify-between bg-dlgrey flex-col md:flex-row py-4">
        <h2 className="text-4xl mx-auto p-4 text-center font-bold">Blog</h2>
      </div>
      <div className="justify-between  flex-col md:flex-row py-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-2">
            <h2 className="text-center py-4 mx-auto font-bold text-2xl">
              Latest post
            </h2>
            <BlogCard
              blog={initial[0]}
              description={false}
              className="text-center"
            />
          </div>
          <div className="my-auto mx-auto pt-6 text-lg w-1/2 px-4">
            <p className="py-2">
              I blog about a lot of tech and learning topics. These posts are a
              combination of tutorials and thinking. I often revisit these posts
              and update them both as technologies change and my thinking
              changes.
            </p>
            <p className="py-2">
              Subscribe to the newsletter if you don't want to miss developments
              here and things I find or create.
            </p>
            <button
              className="text-white rounded-xl bg-primary p-2 block mx-auto mt-4"
              onClick={() => setShowModal(true)}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="justify-between bg-dlgrey flex-col md:flex-row py-4">
        <input
          className="block w-1/2 mx-auto p-2 sm:text-sm sm:leading-5"
          placeholder="Search posts"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-24 grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-2 my-4">
        {filteredBlogs?.map((blog) => (
          <BlogCard blog={blog} key={blog.slug} />
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
