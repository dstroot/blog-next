import { SEO } from '../lib/seo';
import { Intro } from '../components/Intro';
import { HeroPost } from '../components/HeroPost';
import { Container } from '../components/Container';
import { SortByDate } from '../lib/sortPosts';
import { MoreStories } from '../components/MoreStories';
import { generateRSSFeed } from '../lib/feed';
import { getAllFilesFrontMatter } from '../lib/getAllFiles';
import { CMS_NAME, BASE_URL, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Index({ posts }) {
  const heroPost = posts[0];
  const morePosts = posts.slice(1);
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
            // views={heroPost.views}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter('data/_posts', '.mdx');

  // Remove any unpublished posts
  posts = posts.filter((posts) => posts.published);

  // Sort list by published date
  posts = SortByDate(posts);

  // Build rss feed when site builds
  await generateRSSFeed(posts);

  return { props: { posts } };
}
