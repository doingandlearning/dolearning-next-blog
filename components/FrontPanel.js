import Image from "next/image";
import Link from "next/link";

export default function FrontPanel({
  title,
  posts,
  children,
  primaryCTA,
  secondaryCTA,
  color,
  reverse = false,
}) {
  return (
    <div className={`bg-${color} p-4`}>
      <h2 className="mx-auto text-center font-bold text-dlblue text-3xl mb-3">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row">
        {reverse ? (
          <>
            <div className="my-auto text-xl text-black leading-none px-8 xl:text-3xl lg:text-2xl">
              {children}
            </div>
            <PostGrid posts={posts} />
          </>
        ) : (
          <>
            <PostGrid posts={posts} />
            <div className="my-auto text-xl text-black leading-none px-8 xl:text-3xl lg:text-2xl">
              {children}
            </div>
          </>
        )}
      </div>
      <div
        className={`flex md:flex-row flex-wrap space-between ${
          reverse ? "md:justify-start" : "md:justify-end"
        } my-4 flex-grow`}
      >
        {primaryCTAParser(primaryCTA)}
        {secondaryCTA && secondaryCTAParser(secondaryCTA)}
      </div>
    </div>
  );
}

function PostGrid({ posts }) {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      {posts.map((post, idx) => (
        <div className="mx-2">
          <Link href={post.url} key={`link-${idx}`}>
            <Image src={post.image} width="380" height="200" />
          </Link>
        </div>
      ))}
    </div>
  );
}

function InvertOrder(comp1, comp2, reverse) {
  console.log(<comp1 />);
  return reverse ? (
    <>
      <comp1 />
      <comp2 />
    </>
  ) : (
    <>
      <comp2 />
      <comp1 />
    </>
  );
}

function secondaryCTAParser(cta) {
  console.log(cta);
  switch (cta.type) {
    case "modal":
      return (
        <div className="text-xl mx-2">
          <div onClick={() => cta.function}>
            <a className="text-white rounded-xl p-4 text-primary hover:bg-primary hover:text-white border-2 border-primary bg-white">
              {cta.text || "More content"}
            </a>
          </div>
        </div>
      );
      break;
    case "link":
      return (
        <div className="text-xl mx-2">
          <Link href={cta.link}>
            <a className="text-white rounded-xl p-4 text-primary hover:bg-primary hover:text-white border-2 border-primary bg-white">
              {cta.text || "Read more content"}
            </a>
          </Link>
        </div>
      );
      break;
    default:
      break;
  }
}

function primaryCTAParser(cta) {
  console.log(cta);
  switch (cta.type) {
    case "modal":
      return (
        <div className="text-xl  mx-2">
          <div onClick={() => cta.function()}>
            <a className="hover:text-lightPrimary hover:bg-white border-2  hover:border-primary text-white bg-lightPrimary rounded-xl p-4">
              {cta.text}
            </a>
          </div>
        </div>
      );
      break;
    case "link":
    default:
      return (
        <div className="text-xl  mx-2">
          <Link href={cta.link}>
            <a className="hover:text-lightPrimary hover:bg-white border-2  hover:border-primary text-white bg-lightPrimary rounded-xl p-4">
              {cta.text || "Read more content"}
            </a>
          </Link>
        </div>
      );
      break;
  }
}
