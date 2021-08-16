import Head from 'next/head';

import { Container } from '../components/Container';
import { MoreStories } from '../components/MoreStories';
import { HeroPost } from '../components/HeroPost';
import { Intro } from '../components/Intro';
import { getAllPosts } from '../lib/api';
import { generateRSSFeed } from '../lib/feed';
import { CMS_NAME, BASE_URL } from '../lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>{CMS_NAME} · Blog</title>

        {/* Open Graph Tags */}
        <meta
          property='og:image'
          content={`${BASE_URL}${heroPost.coverImage}`}
          key='image'
        />
        {/*
          Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
          Use your logo or any other branded image for the rest of your pages.
          Use images with a 1.91:1 ratio and minimum recommended dimensions of 
          1200x630 for optimal clarity across all devices.
        */}
        <meta property='og:title' content={`${CMS_NAME} · Blog`} key='title' />
        {/*
          Add it to all “shareable” pages.
          Focus on accuracy, value, and clickability.
          Keep it short to prevent overflow. There’s no official guidance 
          on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
          Use the raw title. Don’t include branding (e.g., your site name). 
        */}
        <meta
          property='og:description'
          content='Dan Stroot · The most popular blog in the world.'
          key='description'
        />
        {/*
          Complement the title to make the snippet as appealing and click-worthy as possible.
          Copy your meta description here if it makes sense. 
          Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.
        */}
        <meta property='og:url' content={`${BASE_URL}`} key='url' />
        <meta property='og:type' content='website' key='type' />
      </Head>

      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            stats={heroPost.stats}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'excerpt',
    'date',
    'published',
    'slug',
    'author',
    'coverImage',
    'fileName',
    'stats',
  ]).filter((post) => post.published); // don't publish drafts

  // build rss feed when site builds
  await generateRSSFeed(allPosts);

  return {
    props: { allPosts },
  };
}
