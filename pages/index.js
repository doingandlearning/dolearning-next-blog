import Head from "next/head";
import styles from "../styles/Home.module.css";
import FrontPanel from "../components/FrontPanel";
import Header from "../components/Header";
import EmailForm from "../components/EmailForm";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Cunningham (@dolearning)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <p className="text-center text-4xl lg:text-5xl">
          Hi, I'm Kevin Cunningham. 👋🏻
          <br />
          Welcome to my little corner of the internet.
        </p>
        <FrontPanel
          title="Headless WordPress"
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
          ]}
          onward={{
            link:
              "https://www.kevincunningham.co.uk/categories/headless-word-press/",
          }}
          opacity="68"
        >
          <p>
            WordPress is often overlooked as a content management system by
            “modern developers”.
          </p>
          <p>
            I think this is a painful oversight. There is no more affordable,
            flexible and powerful CMS - particularly for statically built sites.
          </p>
        </FrontPanel>
        <EmailForm formid="1754898">
          <p>
            Want to learn more about Headless WordPress?
            <br />
            Sign up for my 5 day email course.
          </p>
        </EmailForm>
        <FrontPanel
          title="Next.js"
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
          onward={{
            link:
              "https://www.kevincunningham.co.uk/categories/migrating-to-next-api-routes/",
          }}
          opacity="49"
        >
          <p>
            Next.js is an amazing framework built on top of React. I spend time
            making tutorials and content exploring how to use it in interesting
            ways.
          </p>
          <p>
            Whether you want to launch a prototype, interact with 3rd party
            services or just improve your coding skills, jump in here!
          </p>
        </FrontPanel>
        <div className="text-3xl">
          I think I want to put a twitter feed in here?
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
