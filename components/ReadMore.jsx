import Link from 'next/link';

export const ReadMore = ({ slug, stats }) => {
  return (
    <Link as={`/posts/${slug}`} href='/posts/[slug]'>
      <a>
        <div className='flex items-center space-x-3'>
          <div className='flex-initial'>
            <p className='transition-colors text-gray-900 dark:text-gray-100 font-semibold hover:underline'>
              Read More
            </p>
            <p className='transition-colors text-gray-600 dark:text-gray-300 text-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 inline-block -mt-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>{' '}
              {stats.text}
            </p>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
              clipRule='evenodd'
            />
          </svg>
          <div className='flex-grow'></div>
        </div>
      </a>
    </Link>
  );
};

/* <svg
            className="h-8 w-8 flex-initial justify-self-start"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 16 16"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg> */

/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg> */

/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg> */
