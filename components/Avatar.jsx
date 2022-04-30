import Image from 'next/image';
import Link from 'next/link';
import { DateFormatter } from './DateFormatter';

export const Avatar = ({ name, picture, size, date }) => {
  return (
    <Link href='/about'>
      {/* 
        You can use the class "group" to group behavior 
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state
      */}
      <a aria-label={name} className='duration-500 ease-in-out group'>
        <div className='flex items-center space-x-5'>
          <Image
            src={picture}
            alt={name}
            width={size}
            height={size}
            layout='fixed'
            objectFit='contain'
            className='flex-initial rounded-full'
          />
          <div className='flex-auto'>
            <p className='mb-0 text-xl font-semibold text-gray-900 transition-colors dark:text-gray-100 group-hover:underline'>
              Dan Stroot
            </p>
            <p className='text-sm text-gray-600 transition-colors dark:text-gray-300'>
              <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
