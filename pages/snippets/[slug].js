import { useMemo } from 'react';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import MDXComponent from '../../components/MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';
import { Container } from '../../components/Container';
import { PostTitle } from '../../components/PostTitle';
// import SnippetHero from '../../components/SnippetHero';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Container>
      <article className='mx-auto max-w-3xl my-6 md:my-10'>
        <PostTitle>{frontMatter.title}</PostTitle>
        <p className='text-xl text-gray-500 mb-4'>{frontMatter.summary}</p>
        <div className='flex space-x-2 text-xs mb-8'>
          <p className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full'>
            Date : {frontMatter.publishedAt}
          </p>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='prose prose-lg dark:prose-dark max-w-none break-words'>
            <Component components={{ ...MDXComponent }} />
          </div>
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
