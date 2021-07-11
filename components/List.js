import { parseISO } from "date-fns";
import Link from "next/link";
import { DateFormatter } from "./DateFormatter";

export const List = ({ posts }) => {
  let year, newYear, changed;

  return (
    <>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Archive
      </h2>
      <div className="max-w-2xl mx-auto mb-8">
        {posts.map((post, index) => {
          const postDate = parseISO(post.date);
          newYear = postDate.getFullYear();
          if (year != newYear) {
            year = newYear;
            changed = true;
          } else {
            changed = false;
          }
          return (
            <div key={`${post.id}-${index}`}>
              {changed && (
                <h3 className="mb-2 mt-4 text-xl md:text-2xl font-bold tracking-tighter leading-tight">
                  {year}
                </h3>
              )}
              <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                <a className="ml-10 text-xl hover:underline">{post.title}</a>
              </Link>
              <span className="text-gray-500 float-right">
                <DateFormatter dateString={post.date} />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
