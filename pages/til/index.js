import Layout from "@components/Layout";
import { getAllTILs } from "lib/tils";
import { format } from "date-fns";
import Link from "next/link";

export default function TILs({ tils }) {
  return (
    <Layout>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 blog-post max-w-2xl">
        <h1 className="text-4xl text-center text-dlblue font-bold py-4">
          Today I learned
        </h1>
        <p>
          A growing list of things I've learned. My aim is to add to it at least
          daily.
        </p>

        <div className="border border-primary rounded text-primary py-2 px-4 my-2">
          <p>Still to do:</p>
          <ul>
            <li>Allow the tags to filter by topic</li>
            <li>Allow individual TILs to list similar topics</li>
          </ul>
        </div>
        <ul>
          {tils.map((til) => (
            <Link href={`/til/${til.slug}`}>
              <li key={til.id} className="cursor-pointer">
                {format(new Date(til.date), "EEEE do MMMM, y")}: {til.title}{" "}
                {til.topics.nodes.map((topic) => (
                  <span className="px-1">#{topic.name.toLowerCase()}</span>
                ))}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const tils = await getAllTILs();

  return {
    props: { tils: tils.tils },
  };
}
