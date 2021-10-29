import useSWR, { SWRConfig } from 'swr';
import { BASE_URL } from '../lib/constants';

const slug = '2021-10-08-human-denial-of-service-attack';
const path = `${BASE_URL}/api/views/${slug}`;

export default function Page(props) {
  return (
    <SWRConfig value={props}>
      <Views />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const { viewCount } = await fetch(path).then((res) => res.json());
  return {
    props: {
      data: viewCount,
    },
  };
}

function Views(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(path, fetcher, {
    fallbackData: props,
    refreshInterval: 30000,
  });

  return (
    <p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fillRule='evenodd'
        clipRule='evenodd'
        className='h-4 w-4 inline-block -mt-1'
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
