import Image from "next/image";
import Link from "next/link";

export default function FrontPanel({
  title,
  posts,
  children,
  onward,
  opacity,
}) {
  return (
    <div className={`bg-opacity-${opacity} bg-primary p-4`}>
      <h2 className="mx-auto text-center text-6xl">{title}</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col">
          {posts.map((post, idx) => (
            <div className="mx-2">
              <Link href={post.url} key={`link-${idx}`}>
                <Image src={post.image} width="380" height="200" />
              </Link>
            </div>
          ))}
        </div>
        <div className="my-auto text-3xl leading-none px-8 xl:text-5xl lg:text-4xl">
          {children}
        </div>
      </div>
      <div className="text-right text-4xl text-white">
        <Link href={onward.link}>
          <a className="text-white">{onward.text || "More content"} ></a>
        </Link>
      </div>
    </div>
  );
}
