import Head from "next/head";
import styles from "../styles/Home.module.css";
import FrontPanel from "../components/FrontPanel";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Image from "next/image";
import React from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [mailingList, setMailingList] = React.useState(
    process.env.MAIN_MAILING_LIST
  );
  const [showModal, setShowModal] = React.useState(false);
  console.log(mailingList);
  return (
    <div>
      <Head>
        <title>Kevin Cunningham (@dolearning)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <EmailForm formid={mailingList} />
      </Modal>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className={styles.main}>
          <div className="flex justify-between bg-dlgrey flex-col md:flex-row">
            <div className="flex flex-row md:flex-col justify-center ml-4 my-2">
              <div>
                <a href="https://twitter.com/dolearning">
                  <Image src="/twitter.svg" width="30" height="30" />
                </a>
              </div>
              {/* <div>github</div> */}
              <div>
                <a href="mailto:kevin@kevincunningham.co.uk">
                  <Image src="/email.svg" width="30" height="30" />
                </a>{" "}
              </div>
            </div>
            <div className="w-5/6 md:w-1/2 mx-auto md:mx-0">
              <p className="text-primary">Hi, I'm Kevin Cunningham</p>
              <h2 className="w-5/6 font-extrabold text-dlblue text-3xl leading-8">
                Welcome to my little corner of the internet
              </h2>
              <p className="5/6">
                I'm passionate about learning, teaching and helping others level
                up their skills. I use this space to grow and develop my ideas
                and thinking.
                <br /> Join my newsletter where I share whay I've been working
                on, new course I've created and cool things I've found on the
                web.
              </p>
              <button
                className="text-white bg-primary rounded-lg my-3 w-full md:w-1/2 mx-auto py-4 px-3"
                onClick={() => {
                  setMailingList("");
                  setShowModal(true);
                }}
              >
                Subscribe to the newsletter
              </button>
            </div>
            <div className="my-4 md:my-auto md:mx-3 mx-auto">
              <Image src="/face.svg" height="200" width="200" />
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
                setMailingList("test");
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
              <p className="text-dlblue text-left ">Like what you see?</p>
              <h2 className="w-5/6 font-extrabold text-white text-3xl leading-8">
                Subscribe to the weekly newsletter
              </h2>
              <EmailForm />
            </div>
          </div>
          <div className="flex">
            <div className="text-4xl my-auto mx-4 w-1/3">
              Come follow me on Twitter! <br />
              Like most places online, I go by
              <a
                href="https://twitter.com/dolearning"
                className="hover:text-primary"
              >
                {" "}
                @dolearning
              </a>
              .
            </div>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="dolearning"
              options={{ height: 400 }}
            />
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
              link: "https://www.kevincunningham.co.uk/categories/learning/",
            }}
            opacity="68"
          >
            <p>
              I spent 12 years teaching Maths to primary and secondary children.
              I've been obsessed with learning and how we learn for decades.
            </p>
            <p>
              I'm a self-taught developer and love helping others level up their
              craft. I write a lot about how we learn and how we can improve our
              learning.
            </p>
          </FrontPanel>
          <EmailForm formid="1791860">
            <p className="text-center">
              Fancy strengthening your learning muscles?
              <br />
              Sign up for my 5 day email course.
            </p>
          </EmailForm>
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
            color="white"
          >
            <p>
              Next.js is an amazing framework built on top of React. I spend
              time making tutorials and content exploring how to use it in
              interesting ways.
            </p>
            <p>
              Whether you want to launch a prototype, interact with 3rd party
              services or just improve your coding skills, jump in here!
            </p>
          </FrontPanel>
        </main>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
