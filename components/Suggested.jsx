import { SortByViews } from '../lib/sortPosts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { randomizeArray } from '../lib/randomizeArray';
import { Views } from './Views';

export function Suggested() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  let { data } = useSWR('/api/views', fetcher);
  const posts = data === undefined ? (data = []) : SortByViews(data);
  const router = useRouter();

  // remove current post from suggested list and take the first two
  const sortedAndExcludedPosts = randomizeArray(
    posts.filter((x) => {
      return x.slug != router.query.slug;
    })
  ).splice(0, 2);

  console.log(sortedAndExcludedPosts);

  return (
    <div className='flex flex-col'>
      {sortedAndExcludedPosts ? <h3 className=''>Suggested</h3> : null}
      <div className='grid grid-cols-1 gap-4 w-full sm:grid-cols-2'>
        {sortedAndExcludedPosts.map((post, _idx) => (
          <SuggestedCard post={post} key={_idx} />
        ))}
      </div>
    </div>
  );
}

const SuggestedCard = ({ post }) => {
  console.log(post.slug);
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className='flex flex-col justify-between px-4 w-full rounded bg-gray-700'>
        <h3 className='!mt-4 !capitalize'>{post.slug.replaceAll('-', ' ').slice(11)}</h3>
        <Views viewCount={post.viewCount} />
      </a>
    </Link>
  );
};
