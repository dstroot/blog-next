import readingTime from 'reading-time';
import { join } from 'path';
import { readFileSync } from 'fs';
import { bundleMDX } from 'mdx-bundler'; // https://github.com/kentcdodds/mdx-bundler
import { REPO } from './constants';

{
  /* Remark Plugins (markdown) 
     https://github.com/remarkjs/remark/blob/main/doc/plugins.md
  */
}
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';

{
  /* Rehype Plugins (html) 
     https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
  */
}
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeImgSize from 'rehype-img-size';

// We will pass in the slug of a .MDX file and it's location.
// Returns the parsed, bundled content along with it's metadata (frontmatter)
export async function getMDXFileBySlug(slug, location) {
  const source = readFileSync(join(process.cwd(), location, `${slug}.mdx`), 'utf8');
  const github = `${REPO}/blob/master/${location}/${slug}.mdx`;
  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions(options) {
      // Recommended way to add custom remark/rehype plugins:
      // The syntax protects you in case we add/remove plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), gfm, emoji];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
        [rehypeImgSize, { dir: 'public' }],
      ];
      return options;
    },
  });

  return {
    code, // bundled content
    frontMatter: {
      ...frontmatter,
      slug: slug,
      github: github,
      stats: readingTime(source),
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
