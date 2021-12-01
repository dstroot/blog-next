import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { PostBody } from '../../components/PostBody';
import { Header } from '../../components/Header';
import { PostHeader } from '../../components/PostHeader';
import { getFilesByExtension } from '../../lib/getAllFiles';
import { getMDFileBySlug } from '../../lib/processMD';
import { CMS_NAME, BASE_URL } from '../../lib/constants';
import { SEO } from '../../lib/seo';

// TODO: add section for "more posts" at bottom of page

export default function Post({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
  stats,
  html,
  github,
}) {
  const seo = {
    title: `${CMS_NAME} · ${title}`,
    url: `${BASE_URL}/posts/${slug}`,
    description: excerpt,
    image: `${BASE_URL}${coverImage}`,
    publishedDate: date,
    author: author.name,
    ogType: 'article',
    twHandle: '@danstroot',
  };

  // register page view after 5s
  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/views/${encodeURIComponent(slug)}`, { method: 'POST' });
    }, 5000);
  }, [slug]);

  return (
    <>
      <SEO {...seo} />
      <Container>
        <Header />
        <article className='mb-6 mt-6 md:mb-10 md:mt-10'>
          <PostHeader
            title={title}
            coverImage={coverImage}
            date={date}
            author={author}
            time={stats.text}
          />
          <PostBody html={html} title={title} slug={slug} path={github} />
        </article>
      </Container>
    </>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// Next.js will statically pre-render all the paths specified
// for each path the params will be fed into "getStaticProps"
export async function getStaticPaths() {
  const posts = getFilesByExtension('data/_posts', '.md');

  // urls/slugs should not have a file extension
  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.md/, ''),
    },
  }));

  return {
    paths: paths,
    // fallback: false is what we want to use if we plan on generating ALL of our
    // dynamic paths during build time. The fallback property can have 3
    // values: false, true, blocking.
    fallback: false,
  };
}

// for each path in "getStaticPaths" the params will be fed into "getStaticProps"
// to render each page.
export async function getStaticProps({ params }) {
  const post = await getMDFileBySlug(params.slug, 'data/_posts');
  return { props: { ...post } };
}
