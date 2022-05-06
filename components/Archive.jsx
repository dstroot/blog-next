import Link from 'next/link';
import { parseISO } from 'date-fns';
import { DateFormatter } from './DateFormatter';

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
              <h3 className='mt-4 mb-2 text-xl font-bold leading-tight tracking-tighter md:text-2xl'>
                {year}
              </h3>
            )}
            <div className='grid items-center grid-flow-col gap-6 ml-8 text-gray-800 dark:text-gray-200'>
              <div className='truncate'>
                <Link href={`/posts/${post.slug}`}>
                  <a className='hover:underline'>{post.title}</a>
                </Link>
              </div>
              <div className='text-sm text-right'>
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
