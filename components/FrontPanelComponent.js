import Link from "next/link";
import Image from "next/image";
import { getMetaImage } from "lib/image";

export default function FrontPanelComponent({ data: { title, text, button1, button2, posts, ...rest } }) {
  return <div className={`bg-white p-4 py-20`}>
    <h2 className="text-center font-bold text-dlblue text-3xl">{title}</h2>
    <div className="flex flex-col md:flex-row justify-between">
      <div>{mapPosts(posts)}</div>
      <div className="text-xl text-black leading-none px-8 xl:text-2xl lg:text-xl -pt-4">
        <div>{text}</div>
      </div>
    </div>
    <div
      className="flex md:flex-row flex-wrap md:justify-end mt-8"
    >
      <div className="text-normal lg:text-xl mx-2">
        <a className="text-white rounded-xl p-4 text-primary hover:bg-primary hover:text-white border-2 border-primary bg-white" href={button1.link} target="_blank">
          {button1.label}
        </a>
      </div>
      <div className="text-normal md:text-xl mx-2">
        <a className="hover:text-lightPrimary hover:bg-white border-2  hover:border-primary text-white bg-lightPrimary rounded-xl p-4" href={button2.link} target="_blank">
          {button2.label}
        </a>
      </div>
    </div>
  </div>
}

function mapPosts(posts) {
  const { post1, post2, post3, post4 } = posts;
  console.log(posts)
  return <div className="pt-8 grid grid-rows-2 grid-cols-2">

    <div className="mx-2">
      <Link href={`/posts/${post1.slug}`}>
        <a>
          <Image src={getMetaImage(post1.title)} width="380" height="200" />
        </a>
      </Link>
    </div>
    <div className="mx-2">
      <Link href={`/posts/${post2.slug}`}>
        <a>
          <Image src={getMetaImage(post2.title)} width="380" height="200" />
        </a>
      </Link>
    </div>
    <div className="mx-2">
      <Link href={`/posts/${post3.slug}`}>
        <a>
          <Image src={getMetaImage(post3.title)} width="380" height="200" />
        </a>
      </Link>
    </div>
    <div className="mx-2">
      <Link href={`/posts/${post4.slug}`}>
        <a>
          <Image src={getMetaImage(post4.title)} width="380" height="200" />
        </a>
      </Link>
    </div>

  </div>
}