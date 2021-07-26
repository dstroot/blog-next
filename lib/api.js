import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  const fullPath = join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  // stats: {
  //   text: '1 min read',
  //   minutes: 1,
  //   time: 60000,
  //   words: 200
  // }

  const items = {};

  // Ensure only the minimal needed data is exposed
  // we only return fields requested - kind of like a query
  fields.forEach((field) => {
    if (field === 'slug') {
      // items[field] = realSlug.slice(11);
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'fileName') {
      items[field] = fileName;
    }
    if (field === 'stats') {
      items[field] = stats;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

// pass in a list of fields to bring back
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
