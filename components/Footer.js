import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
import { categoryPathBySlug } from 'lib/categories';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <footer className="bg-primary">
      <div className="bg-primary text-white mx-auto">
        {hasMenu && (
          <div className="flex justify-center text-white mx-auto">
            <ul className="list-none">
              {hasRecentPosts && (
                <li>
                  <Link href="/posts/">
                    <a className="">
                      <strong className="text-white decoration-none">Recent Posts</strong>
                    </a>
                  </Link>
                  <div className="">
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)}>
                            <a className="text-white  ">{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </li>
              )}
            </ul>
          </div>
        )}

        <div className="text-center flex justify-between mx-8">
          <Link href="/feed.xml">
            <a className="text-white list-none">RSS</a>
          </Link>
          <div>
            <p>
              &copy; {new Date().getFullYear()} {title}
            </p>
          </div>
          <Link href="/sitemap.xml">
            <a className="text-white list-none">Sitemap</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// export default function Footer() {
//   return (
//     <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-primary w-full">
//       <div className="flex text-white justify-between my-auto">
//         <div>
//           <Image src="/brain.jpg" height="40" width="40" />
//         </div>
//         <div className="pt-2">
//           <Link href="/">
//             <a className="text-white">Home</a>
//           </Link>
//         </div>
//         <div className="pt-2">
//           <Link href="/blog">
//             <a className="px-4 text-white">Blog</a>
//           </Link>
//         </div>
//         <div className="pt-2">
//           <Link href="/garden">
//             <a className="px-4 text-white">Garden</a>
//           </Link>
//         </div>
//         <div className="flex-end my-auto">
//           <a href="https://www.twitter.com/dolearning">
//             <Image src="/twitter.svg" width="30" height="30" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
