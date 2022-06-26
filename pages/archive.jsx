import Head from 'next/head';
import { Header } from '../components/Header';
import { Archive } from '../components/Archive';
import { CMS_NAME } from '../lib/constants';
import { PostTitle } from '../components/PostTitle';
import { Container } from '../components/Container';
import { SortByDate } from '../lib/sortPosts';
import { getAllFilesFrontMatter } from '../lib/getAllFiles';

export default function Index({ posts }) {
  const title = `${CMS_NAME} · Archive`;

  return (
    <>
      <Head>
        <title>{title}</title>
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
