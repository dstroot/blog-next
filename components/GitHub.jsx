import millify from 'millify';
import useSWR from 'swr';

export const GitHub = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: git, error } = useSWR('/api/github', fetcher);

  return (
    <a
      href={git ? git.url : '#'}
      aria-label='GitHub Repository'
      target='_blank'
      rel='noreferrer'
      className='flex space-x-5 text-xs'
    >
      <div className='flex items-center space-x-1'>
        <span className='font-mono'>{git ? git.description : '-'}</span>
      </div>
      <div className='flex items-center space-x-1'>
        <span className='w-4 h-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <title>Git Stars</title>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
            />
          </svg>
        </span>
        <span className='font-mono'>{git ? millify(git.stars) : '-'}</span>
      </div>
      <div className='flex items-center space-x-1'>
        <span className='w-4 h-4 font-mono'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <title>Git Forks</title>
            <line x1='6' y1='3' x2='6' y2='15'></line>
            <circle cx='18' cy='6' r='3'></circle>
            <circle cx='6' cy='18' r='3'></circle>
            <path d='M18 9a9 9 0 0 1-9 9'></path>
          </svg>
        </span>
        <span className='font-mono'>{git ? millify(git.forks) : '-'}</span>
      </div>
    </a>
  );
};
