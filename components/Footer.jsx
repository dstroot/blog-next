import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { CMS_NAME } from '../lib/constants';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const year = new Date(); // evergreen copyright year

  return (
    <footer className='bg-gray-100 text-gray-600 dark:bg-dark-4 dark:text-gray-300 transition-colors'>
      <Container>
        <div className='flex flex-col md:flex-row items-center content-center gap-x-1 my-2 md:my-4'>
          {/* 
            IMAGE & TAGLINE 
          */}
          <div className='flex-none mb-4 md:mr-8 md:mb-0'>
            <Image
              src='/assets/blog/authors/dan.jpeg'
              alt={CMS_NAME}
              width={85}
              height={85}
              layout='fixed'
              objectFit='contain'
              className='rounded-full'
            />
          </div>
          <div className='flex-1 text-center md:text-left text-xl md:text-2xl'>
            I love building things. Family man, technologist and Hacker News aficionado. Eternally
            curious.
          </div>

          {/* 
            LINKS 
          */}
          <div className='flex-none'>
            <div className='flex flex-col text-sm'>
              <span className='font-bold text-gray-700 dark:text-gray-100 uppercase mt-4 md:mt-0 mb-1 min-w-max'>
                More Stuff
              </span>

              <Link href='/archive'>
                <a className='hover:text-gray-500 font-medium'>Post Archive</a>
              </Link>
              <Link href='/snippets'>
                <a className='hover:text-gray-500 font-medium'>Code Snippets</a>
              </Link>
              {/* <Link href='/about'>
                <a className='hover:text-gray-500 font-medium'>About Me</a>
              </Link> */}
              <a
                href='https://dstroot.github.io/readme/'
                className='hover:text-gray-500 font-medium'
              >
                User Guide
              </a>
            </div>
          </div>
        </div>

        {/* 
            Bottom Section
        */}
        <div className='flex flex-col md:flex-row items-center md:items-end justify-between'>
          <div className='flex items-center order-2 md:order-1 dark:text-gray-400 text-xs tracking-wide'>
            Crafted with ♥️ in California.&nbsp;&copy;&nbsp;
            {year.getFullYear()}
            {','}&nbsp;
            <Link href='/analytics'>
              <a className='font-medium'>Dan Stroot</a>
            </Link>
            {'.'}
          </div>
          {/* <div className='flex items-center text-xs font-medium dark:text-gray-400 hover:underline'>
            <Link
              href='/archive'
              className='font-medium dark:text-gray-400 hover:underline hover:text-gray-500'
            >
              <a>Post Archive</a>
            </Link>
          </div> */}
          <div className='flex items-center space-x-4 order-1 md:order-2 my-3 md:my-0 text-2xl'>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};
