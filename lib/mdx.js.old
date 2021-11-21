import matter from "gray-matter";
import { join } from "path";
import readingTime from "reading-time";
import { readdirSync, readFileSync } from "fs";
import { bundleMDX } from "mdx-bundler";
// https://github.com/kentcdodds/mdx-bundler

// These plugins are completely dependent on the blog that you
// are planning to build if you're just focused on building one without
// any syntax highlighting of those sorts these all won't be necessary
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), type));
}

export async function getFileBySlug(slug, type) {
  // we will pass in a slug of the page we want like /blogs/blog-1
  // example and we will get the parsed content for that particular
  // blog page.

  const source = readFileSync(join(process.cwd(), type, `${slug}.mdx`), "utf8");

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      // you can add your plugins right here if you'd rather use
      // remark plugins then you can add them similary just replace
      // the occurances of rehype with remark.
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ];
      return options;
    },
  });

  return {
    // return the parsed content for our page along with it's metadata
    // we will be using gray-matter for this.
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter,
    },
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = readdirSync(join(process.cwd(), type));

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(join(process.cwd(), type, postSlug), "utf8");
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source),
      },
      ...allPosts,
    ];
  }, []);
}
