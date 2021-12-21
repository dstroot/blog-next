import Head from 'next/head';
import { Container } from '../components/Container';
import { Archive } from '../components/Archive';
import { Header } from '../components/Header';
import { PostTitle } from '../components/PostTitle';
import { getAllFilesFrontMatter } from '../lib/getAllFiles';
import { CMS_NAME } from '../lib/constants';
import { SortByDate } from '../lib/sortPosts';

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Archive</title>
      </Head>

      <Container>
        <Header />
        <PostTitle>Archive</PostTitle>
        <div className='max-w-2xl mx-auto mb-10'>
          {posts.length > 0 && <Archive posts={posts} />}
        </div>
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

  return {
    props: { posts },
  };
}
