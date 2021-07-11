import Head from "next/head";

import { Container } from "../components/Container";
import { List } from "../components/List";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { CMS_NAME, ALERT } from "../lib/constants";

export default function Index({ allPosts }) {
  const posts = allPosts.filter((post) => post.published);

  return (
    <>
      <Head>
        <title>{CMS_NAME} · List</title>
      </Head>
      <Layout alert={ALERT}>
        <Container>
          <Header />
          {posts.length > 0 && <List posts={posts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "excerpt",
    "date",
    "published",
    "slug",
    // "author",
    // "coverImage",
    // "fileName",
    "stats",
  ]);

  return {
    props: { allPosts },
  };
}
