import Layout from "@components/Layout";
import { getAllTILs, getTILBySlug } from "lib/tils";
import { format } from "date-fns";
import EmailForm from "components/EmailForm";
import Link from "next/link";

export default function TIL({ til }) {
  return (
    <Layout>
      <div>
        <h1 className="text-4xl text-center text-dlblue font-bold py-4">
          {til.title}
        </h1>
        <p className="border-t border-b my-auto py-2 text-gray-700 text-center bg-dlgrey">
          Published on {format(new Date(til.date), "EEEE do MMMM, y")}.
        </p>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">
          <Link href="/til" className="text-center">
            Back to all TILs
          </Link>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: til.content,
            }}
          />
        </div>
        <div className="bg-primary w-full flex justify-center mx-auto mb-4">
          <EmailForm formid={1697448} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { tils } = await getAllTILs();
  const paths = tils.map((post) => {
    const { slug } = post;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params = {} } = {}) {
  const { til } = await getTILBySlug(params?.slug);
  return { props: { til } };
}
