import Head from "next/head";

import { Container } from "../components/Container";
import { MoreStories } from "../components/MoreStories";
import { HeroPost } from "../components/HeroPost";
import { Intro } from "../components/Intro";
import { Layout } from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { CMS_NAME, ALERT } from "../lib/constants";
import { Feed } from "feed";
import fs from "fs";

export default function Index({ allPosts }) {
  const filteredPosts = allPosts.filter((post) => post.published);
  const heroPost = filteredPosts[0];
  const morePosts = filteredPosts.slice(1);

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
    "excerpt",
    "date",
    "published",
    "slug",
    "author",
    "coverImage",
  ]);

  generateRSSFeed(allPosts);

  return {
    props: { allPosts },
  };
}

const generateRSSFeed = (posts) => {
  const baseUrl = "https://www.danstroot.com";

  // Construct a new Feed object
  const feed = new Feed({
    title: "Feed Title",
    description: "This is my personal feed!",
    id: "http://example.com/",
    link: "http://example.com/",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "http://example.com/image.png",
    favicon: "http://example.com/favicon.ico",
    copyright: "All rights reserved 2013, John Doe",
    updated: new Date(2013, 6, 14), // optional, default = today
    generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: "https://example.com/json",
      atom: "https://example.com/atom",
    },
    author: {
      name: "John Doe",
      email: "johndoe@example.com",
      link: "https://example.com/johndoe",
    },
  });

  // Add each article to the feed
  posts.forEach((post) => {
    // const url = `${baseUrl}/${fileName}`;

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: post.slug,
      description: post.excerpt,
      content: post.content,
      author: [
        {
          name: "Jane Doe",
          email: "janedoe@example.com",
          link: "https://example.com/janedoe",
        },
      ],
      date: new Date(post.date),
      // image: feed.link + post.coverImage,
    });
  });

  feed.addCategory("Technology");

  // Write the RSS output to a public file, making it
  // accessible at ashleemboyer.com/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
};
