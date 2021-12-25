import { Tweet } from 'mdx-embed';
// https://www.mdx-embed.com/?path=/docs/mdx-embed--page
// There are lot's of components available via mdx-embed

/* ---  Custom MDX Components --- */
import { CustomImage } from './CustomImage';
import { CustomLink } from './CustomLink';
import { CodeBlock } from './CodeBlock';
import { YouTube } from './YouTube';
import { GitGist } from './GitGist';
import { Step } from './Step';

export const MDXComponents = {
  // Override standard HTML Tags
  a: CustomLink,
  img: CustomImage,

  // MDX components
  CodeBlock,
  YouTube,
  GitGist,
  Tweet, // https://blog.maximeheckel.com/posts/static-tweets-with-mdx-nextjs/
  Step,
};
