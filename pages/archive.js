import Head from "next/head";
import { Container } from "../components/Container";
import { Archive } from "../components/Archive";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { PostTitle } from "../components/PostTitle";
import { getAllPosts } from "../lib/api";
import { CMS_NAME, ALERT } from "../lib/constants";

export default function Index({ allPosts }) {
  const posts = allPosts.filter((post) => post.published);

  return (
    <>
      <Head>
        <title>{CMS_NAME} · Archive</title>
      </Head>
      <Layout alert={ALERT}>
        <Container>
          <Header />
          <PostTitle>Archive</PostTitle>
          <div className="max-w-2xl mx-auto mb-10">
            {posts.length > 0 && <Archive posts={posts} />}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "published", "slug"]);

  return {
    props: { allPosts },
  };
}
