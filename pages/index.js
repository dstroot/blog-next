import Head from 'next/head';

import { Container } from '../components/Container';
import { MoreStories } from '../components/MoreStories';
import { HeroPost } from '../components/HeroPost';
import { Intro } from '../components/Intro';
import { getAllPosts } from '../lib/api';
import { generateRSSFeed } from '../lib/feed';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <Head>
        <title>{CMS_NAME} · Blog</title>
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
