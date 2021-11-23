import { join } from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { markdownToHtml } from './markdownToHtml';
import { REPO } from './constants';

// returns data for an individual blog post
export async function getMDFileBySlug(slug, location) {
  const fileName = `${slug}.md`;
  const fullPath = join(location, fileName);
  const fileContents = readFileSync(fullPath, 'utf8');
  const github = `${REPO}/blob/master/${location}/${fileName}`;
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content || '');

  const item = {
    ...data, // frontmatter
    html: html,
    slug: slug,
    github: github,
    stats: readingTime(content), // word count, reading time, etc.
  };

  return item;
}
