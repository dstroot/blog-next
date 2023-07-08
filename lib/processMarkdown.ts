import fs from 'fs';
// import toc from "@jsdevtools/rehype-toc";
import { join } from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import rehypeSlug from 'rehype-slug';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export async function processMarkdown(name: string) {
  const fullPath = join(process.cwd(), '/data' + `${name}`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter separates the data in the YAML from the rest of the content
  const { data, content } = matter(fileContents);

  // process the content to HTML
  const html = await unified()
    .use(remarkParse)
    // use remark plugins below
    .use(remarkRehype)
    // use rehype plugins below
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    // .use(toc)
    .use(rehypeStringify)
    .process(content);

  const htmlString = String(html);

  return { data, html: htmlString };
}
