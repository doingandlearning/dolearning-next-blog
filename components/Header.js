import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function ActiveLink({ href, children }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} text-lg text-primary hover:text-dlblue`;
  } else {
    className = `${className} text-lg text-dlblue hover:text-primary`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

export default function Header() {
  const router = useRouter();
  return (
    <div className="container mx-auto my-auto px-4 sm:px-6 lg:px-8 bg-white p-4 flex justify-around md:justify-between">
      <div className="mx-0 md:mx-12">
        <Image src="/brain.svg" height="40" width="40" />
      </div>
      <div className="flex lg:w-1/5 md:w-1/3 w-1/2 ml-6 justify-between my-auto">
        <ActiveLink href="/">
          <a className="mx-2">Home</a>
        </ActiveLink>
        <ActiveLink href="/blog">
          <a className="mx-2">Blog</a>
        </ActiveLink>
        <ActiveLink href="/garden">
          <a className="mx-2">Garden</a>
        </ActiveLink>
      </div>
    </div>
  );
}
