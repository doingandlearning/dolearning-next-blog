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
              src={`https://res.cloudinary.com/kc-cloud/w_1200,f_auto/l_text:Montserrat_80_bold:${encodeURIComponent(blog.title.length > 60 ? blog.title.substr(0, 60) + "..." : blog.title)},co_rgb:eee,c_fit,w_720,g_north_east,x_70,y_70//v1616954922/ogimages/base_wfdl2u.png`}
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
