import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { BASE_URL } from './constants';
import matter from 'gray-matter';
import readingTime from 'reading-time';

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
export function getFilesByExtension(location, fileExtension) {
  const files = readdirSync(getPath(location), 'utf8').filter((fileName) =>
    fileName.endsWith(fileExtension)
  );
  return files;
}

// // returns an array of metadata from each file in a specific directory (location)
// // E.g. the basic data we need about the file like the title, summary, published date, author etc.
// export async function getAllFilesFrontMatter(location, fileExtension) {
//   const files = getFilesByExtension(location, fileExtension);

//   return await files.reduce(async (allPosts, postSlug) => {
//     const slug = postSlug.replace(fileExtension, '');
//     const source = readFileSync(getPath(location, postSlug), 'utf8');
//     const { data } = matter(source);

//     return [
//       {
//         ...data, // frontmatter
//         slug: slug,
//         stats: readingTime(source), // word count, reading time, etc.
//       },
//       ...(await allPosts),
//     ];
//   }, []);
// }

// returns an array of metadata from each file in a specific directory (location)
// E.g. the basic data we need about the file like the title, summary, published, author etc.
export const getAllFilesFrontMatter = async (location, fileExtension) => {
  return await Promise.all(
    getFilesByExtension(location, fileExtension).map(async (fileName) => {
      const slug = fileName.replace(fileExtension, '');
      const source = readFileSync(getPath(location, fileName), 'utf8');
      const { data } = matter(source);

      return {
        ...data, // frontmatter
        slug: slug,
        stats: readingTime(source), // word count, reading time, etc.
      };
    })
  );
};
