import useSWR, { SWRConfig } from 'swr';
import { BASE_URL } from '../lib/constants';
import { GitHub } from '../components/GitHub';
import { Newsletter } from '../components/Newsletter';
// import { Views } from '../components/Views';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : BASE_URL;
const slug = '2021-10-08-human-denial-of-service-attack';
const path = `${URL}/api/views/${slug}`;

/**
 * TODO: Goal is to create an MDX component that can be "fed" a tweet id and have it
 * display the tweet without all the twitter javascript stuff. The component is fed
 * the tweet id, then it uses the twitter API to retrieve the tweet. Then it uses a
 * standard react component, styled with tailwind, to display the tweet.
 *
 * We have all the basics already working below. We already have a component that
 * renders the tweet. We need to create a component that can be fed the tweet id.
 * Checkout how GitGist is built in MDXComponents.
 *
 */

export default function Index(props) {
  return (
    <>
      <SWRConfig value={props}>
        <Views />
      </SWRConfig>
      <GitHub />
      <Newsletter />
    </>
  );
}

export async function getStaticProps() {
  const views = await fetch(path).then((res) => res.json());
  return {
    props: {
      fallback: {
        [path]: views,
      },
    },
  };
}

function Views({ fallback }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(path, fetcher, {
    fallbackData: fallback,
    refreshInterval: 30000,
  });

  return (
    <p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
        className='inline-block w-4 h-4 -mt-1'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path d='M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z' />
      </svg>{' '}
      {data.viewCount} views
    </p>
  );
}
