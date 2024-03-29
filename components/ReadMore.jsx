import Link from 'next/link';

export const ReadMore = ({ slug }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className='duration-300 ease-in-out group'>
        <div className='flex items-center space-x-2'>
          <div className='text-xl font-semibold text-gray-900 transition-colors dark:text-gray-100 group-hover:underline'>
            {/* Changed from "Read More" which was flagged by Lighthouse */}
            Read Post
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-7 h-7'
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
          </div>
        </div>
      </div>
    </Link>
  );
};
