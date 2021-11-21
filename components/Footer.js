import Image from 'next/image';
// import Link from 'next/link';
import { Container } from './Container';
import { CMS_NAME } from '../lib/constants';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const year = new Date(); // evergreen copyright year
  return (
    <footer className='bg-gray-100 text-gray-600 dark:bg-dark-4 dark:text-gray-300 transition-colors'>
      <Container>
        <div className='flex flex-col md:flex-row items-center mb-2'>
          <div className='mb-4 md:mr-8 md:mb-0'>
            <Image
              src='/assets/blog/authors/dan.jpeg'
              alt={CMS_NAME}
              width={85}
              height={85}
              layout='fixed'
              className='rounded-full'
            />
          </div>
          <div className='text-center md:text-left text-xl md:text-2xl'>
            I love building things. Family man, technologist and Hacker News
            aficionado. Eternally curious.
          </div>
        </div>
        {/* 
            Bottom Section
        */}
        <div className='flex flex-col md:flex-row items-center md:items-end justify-between text-xs'>
          <div className='flex items-center order-2 md:order-1 dark:text-gray-400'>
            Crafted with ♥️ in California.&nbsp;&copy;&nbsp;
            {year.getFullYear()}, Dan Stroot.
          </div>
          {/* <div className="flex items-center text-xs font-medium dark:text-gray-400 hover:underline">
            <Link
              href="/archive"
              className="font-medium dark:text-gray-400 hover:underline hover:text-gray-500"
            >
              <a>Post Archive</a>
            </Link>
          </div> */}
          <div className='flex items-center space-x-4 order-1 md:order-2 mb-3 md:mb-0 text-2xl'>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};
