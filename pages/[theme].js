import Layout from "@components/Layout";
import Modal from "@components/Modal";
import EmailForm from "@components/EmailForm";
import ResourceCard from "@components/ResourceCard";
import BlogCard from "@components/BlogCard";

import React from "react";
import Image from "next/image";

export default function LandingPage() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid="1754898" />
      </Modal>
      <div>
        <div className="justify-between bg-dlgrey flex-col md:flex-row p-4">
          <h1 className="text-4xl text-center text-dlblue font-bold">
            Headless Wordpress
          </h1>
          <div className="flex p-6">
            <Image
              src="http://www.fillmurray.com/200/200"
              height="200"
              width="200"
            />
            <div className="pt-4 ml-6">
              <p>Some amazing things about WordPress</p>
            </div>
          </div>
          <div className="mx-auto text-center">
            <p className="pt-4">
              Sign-up for a short email course about Headless WordPress.
            </p>
            <button className="text-white bg-primary text-center rounded-xl p-2 mt-4">
              Give me my course!
            </button>
          </div>
        </div>
        <div>
          {posts.map((post) => (
            <BlogCard key={post.slug} blog={post} />
          ))}
        </div>

        <div className="justify-between bg-dlgrey flex-col md:flex-row py-4">
          <h2 className="text-center text-3xl font-bold text-dlblue">
            Resources
          </h2>
          {resources.map((resource) => (
            <ResourceCard key={resource.name} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

const posts = [
  {
    title: "WTF does headless mean?",
    slug: "wtf-does-headless-mean",
    path: "/posts/wtf-does-headless-mean",
  },
];
const resources = [];
