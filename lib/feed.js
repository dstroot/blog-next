import { CMS_NAME, TAGLINE, BASE_URL } from "../lib/constants";
import { Feed } from "feed";
import fs from "fs";

export const generateRSSFeed = (posts) => {
  const feed = new Feed({
    title: CMS_NAME,
    description: TAGLINE,
    id: BASE_URL,
    link: BASE_URL,
    language: "en",
    image: `${BASE_URL}/assets/blog/authors/dan.jpeg`,
    favicon: `${BASE_URL}/favicon/favicon.png`,
    copyright: "All rights reserved 2021, " + CMS_NAME,
    // updated: Date.now(), // optional, default = today
    // generator: "awesome", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `${BASE_URL}/json`,
      atom: `${BASE_URL}/atom`,
    },
    author: {
      name: "Dan Stroot",
      email: "dan@thestroots.com",
      link: BASE_URL,
    },
  });

  // Add each article to the feed
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${BASE_URL}/posts/${post.slug}`,
      description: `<img src="${BASE_URL}${post.coverImage}" alt="post image" /> ${post.excerpt}`,
      content: post.content,
      author: [
        {
          name: "Dan Stroot",
          email: "dan@thestroots.com",
          link: BASE_URL,
        },
      ],
      date: new Date(post.date),
      image: `${BASE_URL}${post.coverImage}`,
    });
  });

  feed.addCategory("Technology");

  // Write the RSS output to a public file, making it accessible at root/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
};
