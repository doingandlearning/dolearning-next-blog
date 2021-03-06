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
    <div className={`bg-${color} p-4 py-20`}>
      <h2 className="text-center font-bold text-dlblue text-3xl">{title}</h2>
      <div className="flex flex-col md:flex-row ">
        {reverse ? (
          <>
            <div className="text-xl text-black leading-none px-8 xl:text-3xl lg:text-2xl ">
              {children}
            </div>
            <PostGrid posts={posts} />
          </>
        ) : (
          <>
            <PostGrid posts={posts} />
            <div className=" text-xl text-black leading-none px-8 xl:text-3xl lg:text-2xl -pt-4">
              {children}
            </div>
          </>
        )}
      </div>
      <div
        className={`flex md:flex-row flex-wrap ${reverse ? "md:justify-start" : "md:justify-end"
          } mt-8`}
      >
        {primaryCTA && <div className="mt-8">{primaryCTAParser(primaryCTA)}</div>}
        {secondaryCTA &&
          <div className="mt-8">
            {secondaryCTAParser(secondaryCTA)}
          </div>
        }
      </div>
    </div>
  );
}

function PostGrid({ posts }) {
  return (
    <div className="pt-8 grid grid-rows-2 grid-cols-2">
      {posts.map((post, idx) => (
        <div className="mx-2" key={post.url}>
          <Link href={post.url} key={`link-${idx}`}>
            <a>
              <Image src={post.image} width="380" height="200" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

function secondaryCTAParser(cta) {
  switch (cta.type) {
    case "modal":
      return (
        <div className="text-normal lg:text-xl mx-2">
          <div onClick={() => cta.function}>
            <a className="text-white rounded-xl p-4 text-primary hover:bg-primary hover:text-white border-2 border-primary bg-white">
              {cta.text || "More content"}
            </a>
          </div>
        </div>
      );
    case "link":
      return (
        <div className="mx-2">
          <Link href={cta.link}>
            <a className="text-white rounded-xl p-4 text-primary hover:bg-lightPrimary hover:text-white border-2 border-lightPrimary bg-white">
              {cta.text || "Read more content"}
            </a>
          </Link>
        </div>
      );
    default:
      break;
  }
}

function primaryCTAParser(cta) {
  if (!cta.type && !cta.link) return null
  switch (cta.type) {
    case "modal":
      return (
        <div className="text-normal md:text-xl  mx-2">
          <div onClick={() => cta.function()}>
            <a className="hover:text-lightPrimary hover:bg-white border-2  hover:border-primary text-white bg-lightPrimary rounded-xl p-4">
              {cta.text}
            </a>
          </div>
        </div>
      );
    case "link":
    default:
      return (
        <div className="mx-2">
          <Link href={cta.link}>
            <a className="hover:text-lightPrimary hover:bg-white border-2  hover:border-primary text-white bg-lightPrimary rounded-xl p-4">
              {cta.text || "Read more content"}
            </a>
          </Link>
        </div>
      );
  }
}
