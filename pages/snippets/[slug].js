import { useMemo } from 'react';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import MDXComponent from '../../components/MDXComponent';
// import SnippetLayout from '@/layouts/Snippets';
import { getMDXComponent } from 'mdx-bundler/client';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className='flex max-w-6xl mx-auto'>
      <div className='flex flex-col max-w-4xl px-5 mx-auto space-y-10'>
        <div className='flex flex-col mt-32 space-y-7'>
          <h2 className='text-6xl font-black text-gray-800'>
            {frontMatter.title}
          </h2>
          <p className='text-xl text-gray-500'>{frontMatter.summary}</p>
          <div className='flex items-center space-x-3'>
            {/* <p className="px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full">
                {frontMatter.readingTime.text}
              </p> */}
            <p className='px-3 py-1 text-sm text-purple-500 bg-gray-100 rounded-full'>
              Date : {frontMatter.publishedAt}
            </p>
          </div>
          {/* <div className="overflow-hidden rounded-xl">
              <Image
                src={frontMatter.image}
                width={800}
                height={533}
                layout="responsive"
                alt="cover image"
              />
            </div> */}
        </div>
        <article className='flex flex-col prose'>
          <Component components={{ ...MDXComponent }} />
        </article>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('_snippets');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug(params.slug, '_snippets');

  return { props: { ...post } };
}
