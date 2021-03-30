import { getMetaImage } from "lib/image";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, description = true, className }) {
  return (
    <div
      className={``}
    >
      <Link href={blog.path} key={blog.slug}>
        <a>
          <div className={`my-6`}>

            <Image
              src={getMetaImage(blog.title.length)}
              height="200"
              width="400"
            />
            <div className="px-2 -mt-4">
              {description && (
                <>
                  <h2 className="font-bold">{blog.title}</h2>
                  {/* <p>{blog.description}</p> */}
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
        </a>
      </Link>
    </div>
  );
}
