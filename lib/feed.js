import { CMS_NAME, TAGLINE, BASE_URL } from "../lib/constants";
import { Feed } from "feed";
import fs from "fs";

// TODO: this cannot return actual post content because it is still in markdown format.  It would have to be run through remark first.  However I like just giving the excert and then a link back to the article on the blog.

export const generateRSSFeed = (posts) => {
  // evergreen copyright year
  const year = new Date();

  // filter out draft posts
  const filteredPosts = posts.filter((post) => post.published);

  // link back to our site
  const afterContent = (title, link, baseURL) => {
    return `<br>This post <a href=${link}>${title}</a> appeared on <a href=${baseURL}>Dan Stroot's Blog</a>`;
  };

  // create feed object
  const feed = new Feed({
    title: CMS_NAME,
    description: TAGLINE,
    id: BASE_URL,
    link: BASE_URL,
    language: "en",
    image: `${BASE_URL}/assets/blog/authors/dan.jpeg`,
    favicon: `${BASE_URL}/favicon/favicon.png`,
    copyright: "All rights reserved " + year.getFullYear() + CMS_NAME,
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
  filteredPosts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${BASE_URL}/posts/${post.slug}`,
      description: `<img src="${BASE_URL}${post.coverImage}" alt="post image" /> ${post.excerpt}`,
      content:
        // post.content +
        afterContent(
          post.title,
          `${BASE_URL}/posts/${post.slug}`,
          `${BASE_URL}`
        ),
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
  fs.writeFileSync("public/feed.xml", feed.rss2());
};
