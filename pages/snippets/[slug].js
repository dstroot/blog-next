import { useMemo } from 'react';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import MDXComponent from '../../components/MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';
import { Container } from '../../components/Container';
import { PostTitle } from '../../components/PostTitle';
import SnippetHero from '../../components/SnippetHero';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container>
      {/* <PostTitle>{frontMatter.title}</PostTitle>
      <p className='text-xl text-gray-500 mb-6'>{frontMatter.summary}</p> */}
      <section className='flex pt-12 mx-auto max-w-4xl'>
        <SnippetHero matter={frontMatter} />
      </section>
      <section className='flex mx-auto max-w-3xl'>
        <article className='mb-6 mt-6 md:mb-10 md:mt-10'>
          <PostTitle>{frontMatter.title}</PostTitle>
          <p className='text-xl text-gray-500 mb-6'>{frontMatter.summary}</p>

          <div className='flex space-x-2 text-xs mb-8'>
            <p className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full'>
              Date : {frontMatter.publishedAt}
            </p>
          </div>

          <div className='prose max-w-prose'>
            <Component components={{ ...MDXComponent }} />
          </div>
        </article>
      </section>
      {/* <section className='flex mx-auto max-w-3xl'>
        <article className='px-5 w-full prose'>
          <Component components={{ ...MDXComponent }} />
        </article>
      </section> */}
    </Container>
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

{
  /* <Container
  title={`${matter.title} - LEARNNEXT`}
  description={matter.summary}
  date={new Date(matter.publishedAt).toISOString()}
>
  <section className='flex pt-12 mx-auto max-w-4xl'>
    <SnippetHero {...matter} />
  </section>
  <section className='flex mx-auto max-w-4xl'>
    <article className='px-5 w-full prose'>{children}</article>
  </section>
</Container>; */
}
