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
            <div className="grid grid-flow-col gap-6 ml-8 items-center">
              <div className="truncate">
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a>{post.title}</a>
                </Link>
              </div>
              <div className="text-gray-500 text-right text-sm">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
