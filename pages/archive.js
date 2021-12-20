import Head from 'next/head';
import { Container } from '../components/Container';
import { Archive } from '../components/Archive';
import { Header } from '../components/Header';
import { PostTitle } from '../components/PostTitle';
import { getAllFilesFrontMatter } from '../lib/getAllFiles';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts }) {
  const posts = allPosts.filter((post) => post.published);

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
  const allPosts = await getAllFilesFrontMatter('data/_posts', '.mdx');

  return {
    props: { allPosts },
  };
}
