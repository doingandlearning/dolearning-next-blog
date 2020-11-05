import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-primary flex">
      <div className="flex text-white justify-start my-auto">
        <Link href="/">
          <a className="px-4">Home</a>
        </Link>

        <Link href="/blog">
          <a className="px-4">Blog</a>
        </Link>
        <Link href="/garden">
          <a className="px-4">Garden</a>
        </Link>
      </div>
      <div className="flex-end my-auto">
        <a href="https://www.twitter.com/dolearning"></a>
        <Image src="/twitter.svg" width="30" height="30" />
      </div>
    </div>
  );
}
