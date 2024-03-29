import Head from "next/head";
import FrontPanel from "@components/FrontPanel";
import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm";
import Modal from "@components/Modal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getHomePageFields } from "lib/pages";
import { getMetaImage } from "lib/image";
import router from "next/router";

export default function Home({ fields }) {
  const [mailingList, setMailingList] = React.useState(
    process.env.MAIN_MAILING_LIST
  );

  const [showModal, setShowModal] = React.useState(false);

  const headerFields = fields?.acf?.feature;
  const rows = fields?.acf?.rows;
  return (
    <Layout pageTitle="Kevin Cunningham (@dolearning)" description="Homepage">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid={mailingList} />
      </Modal>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div>
            <div className="flex justify-between bg-dlgrey flex-col md:flex-row pt-16 mx-auto  px-4 sm:px-6 lg:px-8">
              {/* <div className="flex flex-row md:flex-col justify-center mx-8 my-2">
                {headerFields.socialLinks.map((social, idx) => (
                  <div key={idx}>
                    <a href={social.link}>
                      <img src={social.logo.sourceUrl} width="50" height="50" />
                    </a>
                  </div>
                ))}
              </div> */}
              <div className="w-5/6 md:w-1/2 md:mx-0 mx-auto">
                {/* <p className="text-primary">Kevin Cunningham</p> */}
                <h2 className="w-5/6 font-extrabold text-dlblue text-3xl leading-8 mb-4">
                  {headerFields.title}
                </h2>
                {headerFields.text.split("\n").map((para, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-black xl:text-xl lg:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="my-4 md:my-auto md:mx-3 mx-auto flex justify-center flex-col">
                <img
                  src={headerFields.image.sourceUrl}
                  height="200"
                  width="200"
                  className="self-center"
                />
                {headerFields.callout.split("\n").map((para, idx) => (
                  <p key={idx} className="text-dlblue text-lg text-center">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row  bg-dlgrey">
              <button
                className="text-white bg-primary rounded-lg my-8 md:ml-40 mx-4 py-4  px-3 text-xl border-2 hover:border-primary hover:text-primary hover:bg-white"
                onClick={() => {
                  setMailingList("1697448");
                  setShowModal(true);
                }}
              >
                {headerFields.button.text}
              </button>
              <button
                onClick={() => router.push("/mentoring")}
                className="text-primary bg-white rounded-lg md:my-8 mx-4  py-4 px-3 text-center text-xl border-2 border-primary"
              >
                Book a call
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-center">What can you expect around here?</h2>
            <div className="container w-2/3 mx-auto">
              <p>
                My primary focus is on helping individuals and teams enhance
                their development skills in JavaScript, including popular
                frameworks such as Node, React, Vue, and Angular.
              </p>
              <p>
                Through my in-person workshops and online courses, I provide
                personalized guidance to help you write robust and reliable
                JavaScript code.
              </p>
              <p>
                On this website, you will find a wealth of resources, including
                a collection of posts, courses, and materials designed to help
                you take your JavaScript skills to the next level.
              </p>
              <p>
                Currently, I am most excited about exploring the latest
                advancements and trends in the world of JavaScript development.
                If you share this passion, I invite you to browse through the
                topics I am currently exploring below.
              </p>
              <p>You could also:</p>
              <ul>
                <li>
                  <Link href="/about">Find out more about me</Link>
                </li>
                <li>
                  <Link href="/mentoring">Book a 1:1 mentoring session</Link>
                </li>
                <li>
                  <Link href="/blog">Look through all of my posts</Link>
                </li>
                <li>
                  <Link href="/garden">
                    Have a stroll around my digital garden
                  </Link>
                </li>
                <li>
                  <a href="https://twitter.com/dolearning" target="_blank">
                    Come follow me on Twitter.
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          {rows.map((row) => mapFrontPageRow(row))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // const { posts, pagination } = await getPaginatedPosts();
  const { fields } = await getHomePageFields();
  return {
    props: {
      fields,
    },
  };
}

function mapFrontPageRow(row) {
  switch (row.fieldGroupName) {
    case "Page_Acf_Rows_Block":
      return (
        <FrontPanel
          title={row.title}
          posts={row.posts.map((post) => {
            return {
              url: `/posts/${post?.post.slug}`,
              image: getMetaImage(post?.post?.title),
            };
          })}
          primaryCTA={{
            link: row.secondButton.destination || "",
            text: row.secondButton.text || "",
          }}
          secondaryCTA={{
            link: "/blog",
            type: "link",
          }}
          color={row.reverse ? "dlgrey" : ""}
          reverse={row.reverse}
        >
          {row.text.split("\n").map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </FrontPanel>
      );
    case "Page_Acf_Rows_Newsletter":
      return (
        <div className="bg-lightPrimary w-full py-16">
          <div className="w-full md:w-1/2 mx-auto px-4">
            <p className="text-dlblue text-left text-lg font-normal">
              {row.eyebrow}
            </p>
            <h2 className="w-full md:w-5/6 font-extrabold text-white text-3xl leading-8">
              {row.heading}
            </h2>
            <EmailForm formid={row.mailingList || "1697448"} />
          </div>
        </div>
      );
    default:
      return <p>{row.fieldGroupName}</p>;
  }
}
