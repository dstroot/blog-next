import { useMemo } from 'react';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import MDXComponent from '../../components/MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';
import { Container } from '../../components/Container';
import { PostTitle } from '../../components/PostTitle';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container>
      <article className='mb-6 mt-6 md:mb-10 md:mt-10'>
        <PostTitle>{frontMatter.title}</PostTitle>
        <p className='text-xl text-gray-500 mb-6'>{frontMatter.summary}</p>

        <p className='px-3 py-1 text-sm bg-gray-100 rounded-full'>
          Date : {frontMatter.publishedAt}
        </p>

        <div className='prose max-w-prose'>
          <Component components={{ ...MDXComponent }} />
        </div>
      </article>
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
