import { Views } from './Views';
import { useRouter } from 'next/router';
import { SortByViews } from '../lib/sortPosts';
import { randomizeArray } from '../lib/randomizeArray';
import { MdOutlineAutoAwesome } from 'react-icons/md';
import Link from 'next/link';
import useSWR from 'swr';

export const Suggested = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  let { data } = useSWR('/api/views', fetcher);
  const posts = data === undefined ? (data = []) : data;
  const router = useRouter();

  // remove current post from suggested list and take the first two
  const sortedAndExcludedPosts = randomizeArray(
    posts.filter((x) => {
      return x.slug != router.query.slug;
    })
  ).splice(0, 2);

  return (
    <div className='flex flex-col'>
      {sortedAndExcludedPosts ? <h4 className='!mb-4'>Suggested</h4> : null}
      <div className='grid grid-cols-1 gap-4 w-full sm:grid-cols-2'>
        {sortedAndExcludedPosts.map((post, _idx) => (
          <SuggestedCard post={post} key={_idx} />
        ))}
      </div>
    </div>
  );
};

const SuggestedCard = ({ post }) => {
  console.log(post.slug);
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className='flex flex-col justify-between px-4 w-full rounded bg-gray-200 dark:bg-gray-700'>
        <h4 className='capitalize'>
          <MdOutlineAutoAwesome className='inline mr-2' />
          {post.slug.replaceAll('-', ' ').slice(11)}
        </h4>
        <Views viewCount={post.viewCount} />
      </a>
    </Link>
  );
};
