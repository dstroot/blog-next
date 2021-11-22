import readingTime from 'reading-time';
import { join } from 'path';
import { readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler'; // https://github.com/kentcdodds/mdx-bundler

{
  /* Remark Plugins (markdown) 
     https://github.com/remarkjs/remark/blob/main/doc/plugins.md
  */
}
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';

{
  /* Rehype Plugins (html) 
     https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
  */
}
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';

// This function adds a wrapper around the generated
// HTML to add tailwindcss styling
function handleHTML(html, info) {
  const { url, transformer } = info;

  // youtube
  if (
    transformer.name === '@remark-embedder/transformer-oembed' &&
    (url.includes('youtube.com') || url.includes('youtu.be'))
  ) {
    return `<div class="aspect-w-16 aspect-h-9">${html}</div>`;
  }

  // twitter
  if (
    transformer.name === '@remark-embedder/transformer-oembed' &&
    url.includes('twitter.com')
  ) {
    return `<div class="block">${html}</div>`;
  }

  return html;
}

// handles errors if a tweet has been deleted
function handleError({ error, url, transformer }) {
  if (
    transformer.name !== '@remark-embedder/transformer-oembed' ||
    !url.includes('twitter.com')
  ) {
    // we're only handling errors from this specific transformer and the twitter URL
    // so we'll rethrow errors from any other transformer/url
    throw error;
  }
  return `<p>Unable to embed <a href="${url}">this tweet</a>.</p>`;
}

// We will pass in the slug of a .MDX file and it's location.
// Returns the parsed, bundled content along with it's metadata (frontmatter)
export async function getMDXFileBySlug(slug, location) {
  const source = readFileSync(
    join(process.cwd(), location, `${slug}.mdx`),
    'utf8'
  );
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      // Recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in
      // case we add/remove plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        gfm,
        emoji,
        [
          remarkEmbedder,
          {
            transformers: [oembedTransformer],
            handleHTML,
            handleError,
          },
        ],
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
      ];
      return options;
    },
  });

  return {
    code, // bundled content
    frontMatter: {
      ...frontmatter,
      slug: slug || null,
      readingTime: readingTime(source),
    },
  };
}

{
  /*

  # If you're using npm

  npm install mdx-bundler
  npm install -D esbuild gray-matter reading-time rehype-code-titles rehype-prism-plus remark-gfm remark-emoji

  # If you're using yarn

  yarn add mdx-bundler
  yarn add -D esbuild gray-matter reading-time rehype-code-titles rehype-prism-plus emark-gfm remark-emoji

*/
}
