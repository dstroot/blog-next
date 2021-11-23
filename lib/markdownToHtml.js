import remark from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import prism from 'remark-prism';
import emoji from 'remark-emoji';
import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';

/* 
Using remark to convert markdown to HTML:
  - prism for code syntax highlighting 
  - gfm for tables
  - emoji
  - embedder for YouTube, Twitter, etc. 

Using remark-embedder to allow you to just paste a link to a youtube video or twitter and have it converted properly to an embedded format - easy peasy.  Using:
  https://github.com/remark-embedder/core
  https://github.com/remark-embedder/transformer-oembed
*/

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

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [oembedTransformer],
      handleHTML,
      handleError,
    })
    .use(html)
    .use(gfm)
    .use(prism)
    .use(emoji)
    .process(markdown);
  return result.toString();
}
