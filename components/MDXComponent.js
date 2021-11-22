import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gist, Tweet } from 'mdx-embed';
// https://www.mdx-embed.com/?path=/docs/introduction--page

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const BlogImg = (props) => {
  return (
    <div className='my-3'>
      <Image
        src={props.src}
        alt={props.alt}
        layout='responsive'
        {...props}
        className='rounded-xl'
      />
    </div>
  );
};

const CodeBlock = ({ children }) => {
  return (
    <div className='flex overflow-hidden relative flex-col p-5 mx-auto my-5 space-y-5 w-full font-mono text-sm rounded-lg bg-gray-700'>
      <div className='flex space-x-2 w-full'>
        <span className='w-3 h-3 rounded-full bg-mac-cls'></span>
        <span className='w-3 h-3 rounded-full bg-mac-min'></span>
        <span className='w-3 h-3 rounded-full bg-mac-max'></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const YouTube = ({ youTubeId }) => {
  return (
    <div className='aspect-w-16 aspect-h-9'>
      <iframe
        src={'https://www.youtube.com/embed/' + youTubeId}
        frameBorder='0'
        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

const Step = (props) => {
  return (
    <div className='flex flex-col items-center py-5 mx-3 space-y-3 text-center md:flex-row md:space-x-5 md:space-y-0'>
      <div className='grid place-items-center w-10 h-10 text-white text-2xl font-bold rounded-full bg-gray-400 border-4 dark:bg-gray-600 border-gray-500 dark:border-gray-400'>
        {/* bg-gradient-to-r from-purple-400 to-pink-500 */}
        {props.number}
      </div>
      <h3 className='text-2xl font-bold text-gray-100'>{props.title}</h3>
    </div>
  );
};

const GitGist = ({ gistURL }) => {
  let [gist, setGist] = useState(null);
  const divStyle = {
    whiteSpace: 'pre-wrap',
  };

  // 3. Create out useEffect function
  useEffect(() => {
    fetch(gistURL)
      .then((response) => response.text())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setGist(data));
  }, [gistURL]);

  return (
    <div
      style={divStyle}
      dangerouslySetInnerHTML={{
        __html: gist,
      }}
    />
  );
};

export const MDXComponent = {
  Image,
  a: CustomLink,
  BlogImg,
  CodeBlock,
  Step,
  YouTube,
  Tweet,
  Gist,
  GitGist,
};

/* <div className='flex overflow-hidden relative flex-col p-5 mx-auto my-5 space-y-5 w-full font-mono text-sm rounded-lg bg-gray-700'>
  <div className='flex space-x-2 w-full'>
    <span className='w-3 h-3 rounded-full bg-mac-cls' />
    <span className='w-3 h-3 rounded-full bg-mac-min' />
    <span className='w-3 h-3 rounded-full bg-mac-max' />
  </div>
  <div
    style={divStyle}
    // className=''
    dangerouslySetInnerHTML={{
      __html: '```Javascript:useIntersectionObserver.js\n' + gist + '\n```',
    }}
  ></div>
</div>; */
