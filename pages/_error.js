import Image from "next/image";
import Link from "next/link";
import Layout from "components/Layout"
function Error({ statusCode }) {
  return (
    <Layout>
      <div className="mt-20 flex text-center align-middle w-3/4 m-auto">
        <div className="align-middle my-auto">
          <p className="font-bold">
            Sorry, I couldn't find that page.
          </p>
          <p>Why don't you head to the <Link href="/blog"><a>blog</a></Link> page and search for something else?</p>
        </div>
        <div>
          <Image src="/brain.jpg" height="200" width="200" className="rounded" />
        </div>
      </div>
    </Layout>
  )
}

export default Error