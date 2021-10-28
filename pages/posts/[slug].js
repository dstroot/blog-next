import { useEffect } from 'react';
import ErrorPage from 'next/error';
import markdownToHtml from '../../lib/markdownToHtml';

import { useRouter } from 'next/router';
import { Container } from '../../components/Container';
import { PostBody } from '../../components/PostBody';
import { Header } from '../../components/Header';
import { PostHeader } from '../../components/PostHeader';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { PostTitle } from '../../components/PostTitle';
import { CMS_NAME, BASE_URL, REPO } from '../../lib/constants';
import { SEO } from '../../lib/seo';

// TODO: add section for "more posts" at bottom of page
export default function Post({ post }) {
  const router = useRouter();
  const githubPath = REPO + '/blob/master/_posts/' + post.fileName;
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

  // register view for the blog after 5s
  useEffect(() => {
    setTimeout(() => {
      fetch('/api/views', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug: post.slug }),
      });
    }, 5000);
  }, [post.slug]);

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
            <PostBody content={post.content} path={githubPath} />
          </article>
        </>
      )}
    </Container>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'fileName',
    'excerpt',
    'stats',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// Next.js will statically pre-render all the paths specified
// for each path the params will be fed into "getStaticProps"
export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
