import { join, extname } from 'path';
import { readdirSync, readFileSync } from 'fs';
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

// returns an array of frontmatter metadata from each file in a specific directory (location)
// E.g. the basic data we need about the file like the title, summary, published date, author etc.
export async function getAllFilesFrontMatter(location, fileExtension) {
  const files = getFilesByExtension(location, fileExtension);

  return files.reduce((allPosts, postSlug) => {
    const source = readFileSync(join(process.cwd(), location, postSlug), 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data, // frontmatter
        slug: postSlug.replace(fileExtension, ''), // add slug
        readingTime: readingTime(source), // word count, reading time, etc.
      },
      ...allPosts,
    ];
  }, []);
}
