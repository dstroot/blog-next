import { useEffect } from 'react';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { Container } from '../../components/Container';
import { PostBody } from '../../components/PostBody';
import { Header } from '../../components/Header';
import { PostHeader } from '../../components/PostHeader';
import { getFilesByExtension } from '../../lib/getAllFiles';
import { getMDFileBySlug } from '../../lib/processMD';
import { PostTitle } from '../../components/PostTitle';
import { CMS_NAME, BASE_URL } from '../../lib/constants';
import { SEO } from '../../lib/seo';

// TODO: add section for "more posts" at bottom of page
export default function Post({ post }) {
  const router = useRouter();
  const seo = {
    title: `${CMS_NAME} · ${post.title}`,
    url: `${BASE_URL}/posts/${post.slug}`,
    description: post.excerpt,
    image: `${BASE_URL}${post.coverImage}`,
    publishedDate: post.date,
    author: post.author.name,
    ogType: 'article',
    twHandle: '@danstroot',
  };

  // register page view for the blog after 5s
  useEffect(() => {
    setTimeout(() => {
      fetch(`/api/views/${encodeURIComponent(post.slug)}`, { method: 'POST' });
    }, 5000);
  }, [post.slug]);

  // if there is no slug then present a 404
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Container>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <SEO {...seo} />
          <article className='mb-6 mt-6 md:mb-10 md:mt-10'>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              time={post.stats.text}
            />
            <PostBody
              html={post.html}
              title={post.title}
              slug={post.slug}
              path={post.github}
            />
          </article>
        </>
      )}
    </Container>
  );
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// Next.js will statically pre-render all the paths specified
// for each path the params will be fed into "getStaticProps"
export async function getStaticPaths() {
  const posts = getFilesByExtension('data/_posts', '.md');

  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.md/, ''), // urls/slugs should not have file extension
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getMDFileBySlug(params.slug, 'data/_posts');

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}
