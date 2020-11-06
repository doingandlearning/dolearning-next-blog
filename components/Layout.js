import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main className="flex justify-between flex-col min-h-screen">
        <Header />
        <div className="content flex-grow">{children}</div>

        <Footer />
      </main>
    </>
  );
}
