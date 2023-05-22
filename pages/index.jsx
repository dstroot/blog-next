import { SEO } from '../components/Seo';
import { Intro } from '../components/Intro';
import { motion } from 'framer-motion';
import { HeroPost } from '../components/HeroPost';
import { Container } from '../components/Container';
import { SortByDate } from '../lib/sortPosts';
import { MoreStories } from '../components/MoreStories';
import { generateRSSFeed } from '../lib/feed';
import { getAllFilesFrontMatter } from '../lib/getAllFiles';
import {
  CMS_NAME,
  BASE_URL,
  HOME_OG_IMAGE_URL,
  FADE_DOWN_ANIMATION_VARIANTS,
} from '../lib/constants';

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
      <motion.div
        initial='hidden'
        whileInView='show'
        animate='show'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Container>
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <Intro />
          </motion.div>
          {heroPost && (
            <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
              <HeroPost
                title={heroPost.title}
                coverImage={heroPost.coverImage}
                date={heroPost.date}
                author={heroPost.author}
                slug={heroPost.slug}
                excerpt={heroPost.excerpt}
                stats={heroPost.stats}
              />
            </motion.div>
          )}
          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter('data/_posts', '.mdx');

  // Remove any unpublished posts
  posts = posts.filter((posts) => posts.published);

  // Remove any future posts
  posts = posts.filter((posts) => Date.parse(posts.date) <= Date.now());

  // Sort list by published date
  posts = SortByDate(posts);

  // Build rss feed when site builds
  await generateRSSFeed(posts);

  return { props: { posts } };
}
