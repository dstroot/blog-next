import { useMemo } from 'react';
import { getMDXFileBySlug } from '../../lib/processMDX';
import { getFilesByExtension } from '../../lib/getAllFiles';
import { MDXComponent } from '../../components/MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';
import { Container } from '../../components/Container';
import { icons } from '../../components/Icons';
import { GitHubLink } from '../../components/GitHubLink';
import { CMS_NAME, BASE_URL } from '../../lib/constants';
import { SEO } from '../../lib/seo';

export default function BlogSlug({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  // TODO add SEO capability with image
  const seo = {
    title: `${CMS_NAME} · ${frontMatter.title}`,
    url: `${BASE_URL}/snippets/${frontMatter.slug}`,
    description: frontMatter.summary,
    // image: `${BASE_URL}${frontMatter.icon}`,
    publishedDate: frontMatter.date,
    ogType: 'article',
    twHandle: '@danstroot',
  };

  return (
    <>
      <SEO {...seo} />
      <Container>
        <article className='mx-auto max-w-3xl my-6 md:my-10'>
          <div className='flex flex-col justify-between items-center md:flex-row mb-8'>
            <h2 className='order-2 my-3  text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-tight md:leading-none font-black text-center md:order-1 text-slate-light md:my-0'>
              {frontMatter.title}
            </h2>
            <div className='order-1 md:order-2 my-3 md:my-0 w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700'>
              <span className='grid place-items-center w-full h-full text-gray-700 dark:text-gray-300 text-3xl'>
                {icons[frontMatter.icon]}
              </span>
            </div>
          </div>

          <p className='text-xl text-gray-500 mb-4'>{frontMatter.summary}</p>

          <div className='flex space-x-2 text-xs mb-8'>
            <p className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full'>
              Date: {frontMatter.publishedAt}
            </p>
            <p className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full'>
              Words: {frontMatter.stats.words}
            </p>
            <p className='px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full'>
              Time: {frontMatter.stats.text}
            </p>
          </div>

          <div className='max-w-3xl mx-auto'>
            <div className='prose prose-lg dark:prose-dark max-w-none break-words mb-8'>
              <Component components={{ ...MDXComponent }} />
            </div>
            <GitHubLink path={frontMatter.github} />
          </div>
        </article>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getFilesByExtension('data/_snippets', '.mdx'); // urls/slugs should not have file extension

  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getMDXFileBySlug(params.slug, 'data/_snippets');
  return { props: { ...post } };
}
