import Layout from "@components/Layout";
import Modal from "@components/Modal";
import EmailForm from "@components/EmailForm";
import ResourceCard from "@components/ResourceCard";
import BlogCard from "@components/BlogCard";

import React from "react";
import Image from "next/image";

export default function LandingPage({
  title,
  image,
  introduction,
  mailingListId,
  cta,
  posts,
  resources,
}) {
  const [showModal, setShowModal] = React.useState(false);
  console.log(introduction);
  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid={mailingListId} />
      </Modal>
      <div className="max-w-5xl mx-auto">
        <div className="justify-between bg-dlgrey flex-col md:flex-row p-4">
          <h1 className="text-4xl text-center text-dlblue font-bold">
            {title}
          </h1>
          <div className="flex p-6">
            <Image src={image.src} height="200" width="200" alt={image.alt} />
            <div className="pt-4 ml-6">
              <div dangerouslySetInnerHTML={createMarkup(introduction)} />
            </div>
          </div>
          <div className="mx-auto text-center">
            <p className="pt-4">{cta.text}</p>
            <button className="text-white bg-primary text-center rounded-xl p-2 mt-4">
              {cta.linkText}
            </button>
          </div>
        </div>
        <div className=" max-w-4xl mx-auto">
          <h2 className="mx-auto text-center">Selected posts</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 p-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} blog={post} description={false} />
            ))}
          </div>
        </div>

        <div className="justify-between bg-dlgrey flex-col md:flex-row py-4 pb-10 px-4">
          <h2 className="text-center text-3xl font-bold text-dlblue">
            Resources
          </h2>
          <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.title}
                image={resource.image}
                link={resource.link}
                title={resource.title}
                description={resource.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { theme: "headless-wordpress" } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    props: { ...inputs },
  };
}

const posts = [
  {
    title: "WTF does headless mean?",
    slug: "wtf-does-headless-mean",
    path: "/posts/wtf-does-headless-mean",
  },
  {
    title: "8 Advantages of Headless WordPress",
    slug: "advantages-of-headless-wordpress",
    path: "/posts/advantages-of-headless-wordpress",
  },
  {
    title: "Headless WordPress: Where should you host the WordPress instance?",
    slug: "where-should-you-host-the-wordpress-instance",
    path: "/posts/where-should-you-host-the-wordpress-instance",
  },
  {
    title:
      "Got a ton of server and database issues - is headless WordPress the answer?",
    slug:
      "got-a-ton-of-server-and-database-issues-is-headless-wordpress-the-answer",
    path:
      "/posts/got-a-ton-of-server-and-database-issues-is-headless-wordpress-the-answer",
  },
];

const resources = [
  {
    image: {
      src: "https://developer.files.wordpress.com/2015/04/feature-restapi3.png",
      alt: "",
    },
    link: "https://developer.wordpress.com/docs/api/",
    title: "REST API Resources",
    description: "Details of the WordPress REST API",
  },
  {
    image: {
      src:
        "https://www.gatsbyjs.com/static/9a172caa0d7bafa251ede1162087bded/2821d/home-page_fast-to-build.webp",
      alt: "",
    },
    link:
      "https://www.gatsbyjs.com/blog/2019-04-26-how-to-build-a-blog-with-wordpress-and-gatsby-part-1/",
    title: "How To Build A Blog with WordPress and Gatsby.js",
    description: "Tutorial from the Gatsby blog",
  },
  {
    image: {
      src: "https://developer.files.wordpress.com/2015/04/feature-restapi3.png",
      alt: "",
    },
    link: "https://developer.wordpress.com/docs/api/",
    title: "Next.js WordPress Starter",
    description: "Colby Fayock started this great Next.js WordPress starter. ",
  },
];

const inputs = {
  title: "Headless WordPress",
  image: { src: "http://www.fillmurray.com/200/200", alt: "" },
  introduction:
    "<p>Some amazing things about WordPress</p><ul><li>Low cost</li><li>Efficient</li></ul>",
  mailingListId: "1754898",
  cta: {
    text: "Sign-up for a short email course about Headless WordPress.",
    linkText: "Give me my course!",
  },
  posts: posts,
  resources: resources,
};

function createMarkup(input) {
  return { __html: input };
}
