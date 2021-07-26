import Image from 'next/image';
import Link from 'next/link';
import { DateFormatter } from './DateFormatter';

export const Avatar = ({ name, picture, size, date }) => {
  return (
    <Link href='/about'>
      <a>
        <div className='flex items-center space-x-5'>
          <Image
            src={picture}
            alt={name}
            width={size}
            height={size}
            className='flex-initial rounded-full'
          />
          <div className='flex-auto'>
            <p className='transition-colors text-gray-900 dark:text-gray-100 text-xl font-semibold mb-0 hover:underline'>
              Dan Stroot
            </p>
            <p className='transition-colors text-gray-600 dark:text-gray-300 text-sm'>
              <DateFormatter dateString={date} />
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
