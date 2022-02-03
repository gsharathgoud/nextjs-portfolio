/*
		I’ve left comments around the code to highlight some parts we really
		need to pay attention to, to understand how this function operates.
*/

// Why do we need these packages and what are they doing for us?
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import glob from "fast-glob";

export default async function getLocalMdx(source) {
  const contentGlob = `${source}/**/*.mdx`;
  const files = glob.sync(contentGlob);

  if (!files.length) return [];
  // What is Promise.all doing here? Why do we need it when interacting with the filesystem
  const content = await Promise.all(
    files.map(async (filepath) => {
      const slug = filepath
        .replace(source, "")
        .replace(/^\/+/, "")
        .replace(new RegExp(path.extname(filepath) + "$"), "");

      const mdxSource = await fs.readFile(filepath);

      // What is next-mdx-remote and gray-matter doing to the data from above?
      const { content, data } = matter(mdxSource);
      const mdx = await serialize(content, { scope: data });

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
