import { Container } from '../components/Container';
import { MoreStories } from '../components/MoreStories';
import { HeroPost } from '../components/HeroPost';
import { Intro } from '../components/Intro';
import { getAllPosts } from '../lib/api';
import { generateRSSFeed } from '../lib/feed';
import { CMS_NAME, BASE_URL, HOME_OG_IMAGE_URL } from '../lib/constants';
import { SEO } from '../lib/seo';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const seo = {
    title: CMS_NAME + ' · Blog',
    url: BASE_URL,
    description: 'Dan Stroot · The most obscure blog in the world.',
    image: HOME_OG_IMAGE_URL,
    publishedDate: '',
    author: CMS_NAME,
    ogType: 'website',
    twHandle: '@danstroot',
  };

  return (
    <>
      <SEO {...seo} />
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
