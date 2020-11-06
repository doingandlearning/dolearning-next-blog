import Head from "next/head";
import FrontPanel from "@components/FrontPanel";
import Layout from "@components/Layout";
import EmailForm from "@components/EmailForm";
import Modal from "@components/Modal";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [mailingList, setMailingList] = React.useState(
    process.env.MAIN_MAILING_LIST
  );

  const [showModal, setShowModal] = React.useState(false);

  return (
    <Layout pageTitle="Kevin Cunningham (@dolearning)" description="Homepage">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid={mailingList} />
      </Modal>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex justify-between bg-dlgrey flex-col md:flex-row py-16">
            <div className="flex flex-row md:flex-col justify-center mx-8 my-2">
              <div>
                <a href="https://twitter.com/dolearning">
                  <Image src="/twitter.svg" width="50" height="50" />
                </a>
              </div>
              {/* <div>github</div> */}
              <div>
                <a href="mailto:kevin@kevincunningham.co.uk">
                  <Image src="/email.svg" width="50" height="50" />
                </a>{" "}
              </div>
            </div>
            <div className="w-5/6 md:w-1/2 md:mx-0 mx-auto">
              {/* <p className="text-primary">Kevin Cunningham</p> */}
              <h2 className="w-5/6 font-extrabold text-dlblue text-3xl leading-8 mb-4">
                Welcome to my little corner of the internet
              </h2>
              <p className="text-xl text-black xl:text-3xl lg:text-2xl">
                I'm passionate about learning, teaching and helping others level
                up their skills. I use this space to grow and develop my ideas
                and thinking.
              </p>
              <br />
              <p className="text-xl text-black xl:text-3xl lg:text-2xl">
                Join my newsletter where I share what I've been working on, new
                courses I've created and cool things I've found on the web.
              </p>

              <button
                className="text-white bg-primary rounded-lg my-8 w-full md:w-1/2 mx-auto py-4 px-3 text-xl border-2 hover:border-primary hover:text-primary hover:bg-white"
                onClick={() => {
                  setMailingList("1697448");
                  setShowModal(true);
                }}
              >
                Subscribe to my newsletter
              </button>
            </div>
            <div className="my-4 md:my-auto md:mx-3 mx-auto text-center">
              <Image src="/face.svg" height="200" width="200" />
              <p className="text-dlblue text-lg text-center">
                Hi, I'm Kevin Cunningham 👋🏻
              </p>
              <p className="text-dlblue text-lg text-center">
                (or @dolearning)
              </p>
            </div>
          </div>

          <FrontPanel
            title="Headless WordPress"
            order="left"
            posts={[
              {
                url:
                  "https://www.kevincunningham.co.uk/posts/wtf-does-headless-mean/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=WTF%20does%20headless%20mean",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/advantages-of-headless-wordpress/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=8%20Advantages%20of%20Headless%20WordPress",
              },
              {
                url:
                  "https://www.kevincunningham.co.uk/posts/wtf-does-headless-mean/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=WTF%20does%20headless%20mean",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/advantages-of-headless-wordpress/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=8%20Advantages%20of%20Headless%20WordPress",
              },
            ]}
            primaryCTA={{
              function: () => {
                setMailingList("1754898");
                setShowModal(true);
              },
              text: "Signup to the free email course",

              type: "modal",
            }}
            secondaryCTA={{
              link:
                "https://www.kevincunningham.co.uk/categories/headless-word-press/",
              type: "link",
            }}
            color="white"
          >
            <p className="my-4">
              WordPress is often overlooked as a content management system by
              “modern developers”.
            </p>
            <p className="my-4">
              I think this is a painful oversight. There is no more affordable,
              flexible and powerful CMS - particularly for statically built
              sites.
            </p>
          </FrontPanel>

          <FrontPanel
            title="Next.js"
            reverse={true}
            posts={[
              {
                url:
                  "https://www.kevincunningham.co.uk/posts/what-are-nextjs-api-routes-all-about",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=What%20are%20Next.js%20API%20routes%20all%20about",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/authentication-with-nextjs-api-routes",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=Authentication%20with%20Next.js%20API%20routes",
              },
              {
                url:
                  "https://www.kevincunningham.co.uk/posts/what-are-nextjs-api-routes-all-about",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=What%20are%20Next.js%20API%20routes%20all%20about",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/authentication-with-nextjs-api-routes",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=Authentication%20with%20Next.js%20API%20routes",
              },
            ]}
            primaryCTA={{
              function: () => {
                setMailingList("1792578");
                setShowModal(true);
              },
              text: "Signup to the free Next.js email course",
              type: "modal",
            }}
            secondaryCTA={{
              link:
                "https://www.kevincunningham.co.uk/categories/migrating-to-next-api-routes/",
              type: "link",
            }}
            color="dlgrey"
          >
            <p className="my-4">
              Next.js is an amazing framework built on top of React. I spend
              time making tutorials and content exploring how to use it in
              interesting ways.
            </p>
            <p className="my-4">
              Whether you want to launch a prototype, interact with 3rd party
              services or just improve your coding skills, jump in here!
            </p>
          </FrontPanel>
          <div className="bg-lightPrimary w-full py-16">
            <div className="w-1/2 mx-auto">
              <p className="text-dlblue text-left text-lg font-normal">
                Like what you see?
              </p>
              <h2 className="w-5/6 font-extrabold text-white text-3xl leading-8">
                Subscribe to the weekly newsletter
              </h2>
              <EmailForm formid="1697448" />
            </div>
          </div>
          <FrontPanel
            title="Learning"
            posts={[
              {
                url: "https://www.kevincunningham.co.uk/posts/learning-react/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=Learning%20React",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/why-do-people-stop-learning/",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=Why%20do%20I%20keep%20learning",
              },
            ]}
            primaryCTA={{
              function: () => {
                setMailingList("1791860");
                setShowModal(true);
              },
              text: "Signup for an email course on learning tactics",
              type: "modal",
            }}
            secondaryCTA={{
              link:
                "https://www.kevincunningham.co.uk/categories/migrating-to-next-api-routes/",
              type: "link",
            }}
            opacity="68"
          >
            <p className="py-4">
              I spent 12 years teaching Maths to primary and secondary children.
              I've been obsessed with learning and how we learn for decades.
            </p>
            <p className="py-4">
              I'm a self-taught developer and love helping others level up their
              craft. I write a lot about how we learn and how we can improve our
              learning.
            </p>
          </FrontPanel>

          <FrontPanel
            title="JAM Stack"
            posts={[
              {
                url:
                  "https://www.kevincunningham.co.uk/posts/what-are-nextjs-api-routes-all-about",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=What%20are%20Next.js%20API%20routes%20all%20about",
              },

              {
                url:
                  "https://www.kevincunningham.co.uk/posts/authentication-with-nextjs-api-routes",
                image:
                  "https://hungry-brattain-538c0b.netlify.app/opengraph?title=Authentication%20with%20Next.js%20API%20routes",
              },
            ]}
            primaryCTA={{
              link:
                "https://www.kevincunningham.co.uk/categories/migrating-to-next-api-routes/",
            }}
            color="dlgrey"
            reverse={true}
          >
            <p>
              You've probably heard about JAMStack. I write about the good, the
              bad and the ugly.
            </p>
            <p></p>
          </FrontPanel>
        </div>
      </div>
    </Layout>
  );
}
