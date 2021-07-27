import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import prism from 'remark-prism';
import emoji from 'remark-emoji';

/* using remark to convert markdown to HTML and prism for code syntax highlighting */

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html)
    .use(gfm)
    .use(prism)
    .use(emoji)
    .process(markdown);
  return result.toString();
}
