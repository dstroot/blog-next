import Head from "next/head";

import { Container } from "../components/Container2";
import { MoreStories } from "../components/MoreStories";
import { HeroPost } from "../components/HeroPost";
import { Intro } from "../components/Intro";
import { Layout } from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { CMS_NAME, ALERT } from "../lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Blog</title>
      </Head>
      <Layout alert={ALERT}>
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
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
