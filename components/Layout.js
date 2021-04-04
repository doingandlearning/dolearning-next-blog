import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import Prism from "prismjs";
import { useEffect } from "react";

export default function Layout({ children, pageTitle, description }) {
  useEffect(() => Prism.highlightAll(), [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
        <a
          rel="webmention"
          href="https://webmention.io/www.kevincunningham.co.uk/webmention"
          className="hidden"
        />
        <a
          rel="pingback"
          href="https://webmention.io/www.kevincunningham.co.uk/xmlrpc"
          className="hidden"
        />
        <script
          async
          defer
          data-domain="kevincunningham.co.uk"
          src="https://plausible.io/js/plausible.outbound-links.js"
        ></script>
      </Head>
      <main className="flex justify-between flex-col min-h-screen">
        <Header />
        <div className="content flex-grow">{children}</div>

        <Footer />
      </main>
    </>
  );
}
