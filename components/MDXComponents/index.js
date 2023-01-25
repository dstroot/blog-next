/* ---  Custom MDX Components --- */
import { CustomImage } from './CustomImage';
import { CustomTweet } from './CustomTweet';
import { CustomLink } from './CustomLink';
import { CodeBlock } from './CodeBlock';
import { YouTube } from './YouTube';
import { GitGist } from './GitGist';
import { Step } from './Step';

export const MDXComponents = {
  // Override standard HTML Tags
  a: CustomLink,
  img: CustomImage,

  // add MDX components
  CodeBlock,
  YouTube,
  GitGist,
  CustomTweet,
  Step,
};

/* 
  MDX Bundler will "bundle" these components along with any other directly imported 
  components for the MDX files to use. 
*/
