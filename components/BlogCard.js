import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, description = true, className }) {
  return (
    <div
      className={`grid ${description ? "grid-cols-2" : "grid-cols-1"
        } ${className}`}
    >
      <Link href={blog.path} key={blog.slug}>
        <a>
          <Image
            src={`https://hungry-brattain-538c0b.netlify.app/opengraph?title=${blog.title}`}
            height="200"
            width="400"
          />
        </a>
      </Link>
      <div className="px-2 -mt-4">
        {description && (
          <>
            <h2 className="font-bold">{blog.title}</h2>
            <p>{blog.description}</p>
          </>
        )}
        {/* {blog.tags && ( */}
        {/*   <ul> */}
        {/*     {blog.tags.map((tag) => ( */}
        {/*       <li>{tag}</li> */}
        {/*     ))} */}
        {/*   </ul> */}
        {/* )} */}
      </div>
    </div>
  );
}
