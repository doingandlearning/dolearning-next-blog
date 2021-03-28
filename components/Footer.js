import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-primary w-full">
      <div className="flex text-white justify-between my-auto">
        <div>
          <Image src="/brain.jpg" height="40" width="40" />
        </div>
        <div className="pt-2">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </div>
        <div className="pt-2">
          <Link href="/blog">
            <a className="px-4 text-white">Blog</a>
          </Link>
        </div>
        <div className="pt-2">
          <Link href="/garden">
            <a className="px-4 text-white">Garden</a>
          </Link>
        </div>
        <div className="flex-end my-auto">
          <a href="https://www.twitter.com/dolearning">
            <Image src="/twitter.svg" width="30" height="30" />
          </a>
        </div>
      </div>
    </div>
  );
}
