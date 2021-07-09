import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";
import emoji from "remark-emoji";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(prism)
    .use(emoji)
    .process(markdown);
  return result.toString();
}

/* using remark to convert markdown to HTML and prism for code syntax highlighting */
