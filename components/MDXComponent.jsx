import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Prism from 'prismjs';
import { Tweet } from 'mdx-embed';
// https://www.mdx-embed.com/?path=/docs/mdx-embed--page
// There are lot's of components available via mdx-embed
// Import them above and export them below

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const CustomImage = (props) => {
  const src = props.src;
  const isInternalImage = src && src.startsWith('/');

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}
      // https://www.peterlunch.com/snippets/next-image-styling
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...props} layout='responsive' loading='lazy' />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
};

const CodeBlock = ({ children }) => {
  return (
    <div className='flex overflow-hidden relative flex-col p-5 mx-auto my-5 space-y-5 w-full font-mono text-sm rounded-lg bg-gray-700'>
      <div className='flex space-x-2 w-full'>
        <span className='w-3 h-3 rounded-full mac-cls'></span>
        <span className='w-3 h-3 rounded-full mac-min'></span>
        <span className='w-3 h-3 rounded-full mac-max'></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const YouTube = ({ link }) => {
  const url = new URL(link);
  return (
    <iframe
      className='w-full aspect-video'
      src={'https://www.youtube-nocookie.com/embed/' + url.pathname}
      frameBorder='0'
      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};

const Step = (props) => {
  return (
    <div className='flex flex-col items-center py-5 mx-3 space-y-3 text-center md:flex-row md:space-x-5 md:space-y-0'>
      <div className='grid place-items-center w-10 h-10 text-white text-2xl font-bold rounded-full bg-gray-400 border-4 dark:bg-gray-600 border-gray-500 dark:border-gray-400'>
        {/* bg-gradient-to-r from-purple-400 to-pink-500 */}
        {props.number}
      </div>
      <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>{props.title}</h3>
    </div>
  );
};

const GitGist = ({ url }) => {
  let [gist, setGist] = useState(null);
  const getName = (url) => url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => setGist(Prism.highlight(text, Prism.languages.javascript, 'javascript')));
  }, [url]);

  return (
    <>
      <div className='rehype-code-title'>{getName(url)}</div>
      <pre className='language-javascript'>
        <code
          className='language-javascript code-highlight'
          dangerouslySetInnerHTML={{
            __html: gist,
          }}
        />
      </pre>
    </>
  );
};

export const MDXComponent = {
  a: CustomLink,
  img: CustomImage,
  CodeBlock,
  Step,
  YouTube,
  Tweet, // https://blog.maximeheckel.com/posts/static-tweets-with-mdx-nextjs/
  // Gist,
  GitGist,
};