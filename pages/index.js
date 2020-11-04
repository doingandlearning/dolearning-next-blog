import Head from "next/head";
import styles from "../styles/Home.module.css";
import FrontPanel from "../components/FrontPanel";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Cunningham (@dolearning)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
