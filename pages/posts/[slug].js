import ErrorPage from 'next/error';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';

import { useRouter } from 'next/router';
import { Container } from '../../components/Container';
import { PostBody } from '../../components/PostBody';
import { Header } from '../../components/Header';
import { PostHeader } from '../../components/PostHeader';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import { PostTitle } from '../../components/PostTitle';
import { CMS_NAME, BASE_URL, REPO } from '../../lib/constants';

// TODO: more posts at bottom
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const githubPath = REPO + '/blob/master/_posts/' + post.fileName;

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
          <Head>
            <title>
              {CMS_NAME} · {post.title}
            </title>
            {/*
              https://ahrefs.com/blog/open-graph-meta-tags/ 

            */}
            <meta property='og:title' content={post.title} key='title' />
            {/*
              Add it to all “shareable” pages.
              Focus on accuracy, value, and clickability.
              Keep it short to prevent overflow. There’s no official guidance 
              on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
              Use the raw title. Don’t include branding (e.g., your site name). 
            */}
            <meta
              property='og:description'
              content={post.excerpt}
              key='description'
            />
            {/*
              Complement the title to make the snippet as appealing and click-worthy as possible.
              Copy your meta description here if it makes sense. 
              Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.
             */}
            <meta
              property='og:url'
              content={`${BASE_URL}/posts/${post.slug}`}
              key='url'
            />
            <meta
              property='og:image'
              content={`${BASE_URL}${post.coverImage}`}
              key='image'
            />
            {/**
             Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
             Use your logo or any other branded image for the rest of your pages.
             Use images with a 1.91:1 ratio and minimum recommended dimensions of 
             1200x630 for optimal clarity across all devices.
             */}
            <meta property='og:type' content='article' key='type' />
          </Head>

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
