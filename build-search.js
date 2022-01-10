// build-search.js
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');
const { readdirSync, readFileSync } = require('fs');
const { join } = require('path');
const matter = require('gray-matter');
const readingTime = require('reading-time');

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
      const source = readFileSync(getPath(location, fileName), 'utf8');
      const { data, content } = matter(source);

      return {
        ...data, // frontmatter
        slug: slug,
        stats: readingTime(content), // word count, reading time, etc.
      };
    })
  );
};

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((post) => {
    return {
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      image: post.coverImage,
      // topicsCollection: { items: post.tags },
      date: post.date,
      readingTime: post.stats.text,
    };
  });

  return transformed;
}

(async function () {
  // initialize environment variables
  dotenv.config();

  try {
    // get all posts
    let posts = await getAllFilesFrontMatter('data/_posts', '.mdx');

    // Remove any unpublished posts
    posts = posts.filter((posts) => posts.published);

    const transformed = transformPostsToSearchObjects(posts);

    // we have data ready for Algolia!
    // console.log(transformed);

    // initialize the client with your environment variables
    const client = algoliasearch('RX6PR7I4PD', '6e10ba7ae5281ee83a1accff7e97aa79');

    //     NEXT_PUBLIC_ALGOLIA_APP_ID=RX6PR7I4PD
    // NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY=16ab493133ac371bb46d6812e5754d19
    // ALGOLIA_SEARCH_ADMIN_KEY=6e10ba7ae5281ee83a1accff7e97aa79

    // initialize the index with your index name
    const index = client.initIndex('blog');

    // save the objects!
    const algoliaResponse = await index.saveObjects(transformed, {
      autoGenerateObjectIDIfNotExist: true,
    });

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join('\n')}`
    );
  } catch (error) {
    console.log(error);
  }
})();

// https://www.contentful.com/blog/2021/07/02/add-algolia-instantsearch-to-nextjs-app/
