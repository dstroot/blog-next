// build-search.js
const dotenv = require('dotenv');
const matter = require('gray-matter');
const readingTime = require('reading-time');
const algoliasearch = require('algoliasearch/lite');
const fetch = require('node-fetch');
const { join } = require('path');
const { readdirSync, readFileSync } = require('fs');

const BASE_URL = 'https://www.danstroot.com';

const getPath = (location, fileName) => {
  if (!location) {
    return;
  }
  if (!fileName) {
    return join(process.cwd(), location);
  }
  return join(process.cwd(), location, fileName);
};

// returns an array all files in a specific directory (location)
// with a specific file extension.
function getFilesByExtension(location, fileExtension) {
  const files = readdirSync(getPath(location), 'utf8').filter((fileName) =>
    fileName.endsWith(fileExtension)
  );
  return files;
}

// returns an array of metadata from each file in a specific directory (location)
// E.g. the basic data we need about the file like the title, summary, published, author etc.
const getAllFilesFrontMatter = async (location, fileExtension) => {
  return await Promise.all(
    getFilesByExtension(location, fileExtension).map(async (fileName) => {
      const slug = fileName.replace(fileExtension, '');
      const path = `${BASE_URL}/api/views/${slug}`;
      const source = readFileSync(getPath(location, fileName), 'utf8');
      const { data, content } = matter(source);
      const results = await fetch(path).then((res) => res.json());

      return {
        ...data, // frontmatter
        content: content, // markdown content
        slug: slug,
        stats: readingTime(content), // word count, reading time, etc.
        views: results.viewCount, // page views
      };
    })
  );
};

// hash a string
function hashString(s) {
  let h;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

// format search index data
function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      objectID: hashString(post.date + post.slug),
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      slug: post.slug,
      image: post.coverImage,
      date: post.date,
      readingTime: post.stats.text,
      views: post.views,
    };
  });

  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config({ path: './.env.local' });

  try {
    // get all posts
    let posts = await getAllFilesFrontMatter('data/_posts', '.mdx');

    // Remove any unpublished posts
    posts = posts.filter((posts) => posts.published);

    // Initialize Algolia client
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    );

    // Add your index name
    const index = client.initIndex('blog');

    // Save the objects
    const transformed = transformPostsToSearchObjects(posts);
    const algoliaResponse = await index.saveObjects(transformed, {});

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search.`
    );
    // console.log(`Object IDs:\n${algoliaResponse.objectIDs.join('\n')}`);
  } catch (error) {
    console.log(error);
  }
})();

// https://www.contentful.com/blog/2021/07/02/add-algolia-instantsearch-to-nextjs-app/
