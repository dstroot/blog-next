import Link from "next/link";
import { parseISO } from "date-fns";
import { DateFormatter } from "./DateFormatter";

export const Archive = ({ posts }) => {
  let year, newYear, changed;

  return (
    <>
      {posts.map((post, index) => {
        newYear = parseISO(post.date).getFullYear();

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
            <div className="grid grid-flow-col gap-6 ml-8 items-center text-gray-700 dark:text-gray-300">
              <div className="truncate">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a className="hover:underline">{post.title}</a>
                </Link>
              </div>
              <div className="text-right text-sm">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
