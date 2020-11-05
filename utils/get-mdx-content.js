import { promises as fs } from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";
import glob from "fast-glob";

import Code from "@components/Code";
import Image from "@components/Image";
import EggheadEmbed from "@components/EggheadEmbed";

export async function getMdxContent(source) {
  const components = { code: Code, img: Image, EggheadEmbed };
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];
  console.log(files);
  const content = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "");

      const mdxSource = await fs.readFile(filepath);
      const { content, data } = matter(mdxSource);
      const mdx = await renderToString(content);

      return {
        filepath,
        slug,
        content,
        data,
        mdx,
      };
    })
  );
  return content;
}
