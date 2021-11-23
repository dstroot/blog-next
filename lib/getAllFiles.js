import { join, extname } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { BASE_URL } from './constants';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// returns an array all files in a specific directory (location)
// with a specific file extension.
export function getFilesByExtension(location, fileExtension) {
  const files = readdirSync(join(process.cwd(), location));
  const targetFiles = files.filter((file) => {
    return extname(file).toLowerCase() === fileExtension;
  });

  return targetFiles;
}

// returns an array of metadata from each file in a specific directory (location)
// E.g. the basic data we need about the file like the title, summary, published date, author etc.
export async function getAllFilesFrontMatter(location, fileExtension) {
  const files = getFilesByExtension(location, fileExtension);
  const URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : BASE_URL;

  return await files.reduce(async (allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), location, postSlug),
      'utf8'
    );

    const slug = postSlug.replace(fileExtension, '');
    const path = `${URL}/api/views/${slug}`;
    const { data } = matter(source);
    const { viewCount } = await fetch(path).then((res) => res.json());

    return [
      {
        ...data, // frontmatter
        slug: slug,
        views: viewCount || null, // number of views
        stats: readingTime(source), // word count, reading time, etc.
      },
      ...(await allPosts),
    ];
  }, []);
}
