import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { CMS_NAME } from '../lib/constants';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  const year = new Date(); // evergreen copyright year

  return (
    <footer className='text-gray-600 transition-colors bg-gray-100 dark:bg-dark-4 dark:text-gray-300'>
      <Container>
        <div className='flex flex-col items-center content-center my-2 md:flex-row gap-x-1 md:my-4'>
          {/* 
            IMAGE & TAGLINE 
          */}
          <div className='flex-none mb-4 md:mr-8 md:mb-0'>
            <Image
              src='/assets/blog/authors/dan.jpeg?auto=format'
              alt={CMS_NAME}
              width={85}
              height={85}
              layout='fixed'
              className='rounded-full'
            />
          </div>
          <div className='flex-1 text-xl text-center md:text-left md:text-2xl'>
            I love building things. Family man, technologist and Hacker News aficionado. Eternally
            curious.
          </div>

          {/* 
            LINKS 
          */}
          <div className='flex-none'>
            <div className='flex flex-col text-sm'>
              <span className='mt-4 mb-1 font-bold text-gray-700 uppercase dark:text-gray-100 md:mt-0 min-w-max'>
                Tools
              </span>

              <Link href='/search'>
                <div className='mt-2 font-medium md:mt-0 hover:text-gray-500'>Search</div>
              </Link>
              <Link href='/archive'>
                <div className='mt-2 font-medium md:mt-0 hover:text-gray-500'>Post Archive</div>
              </Link>
              <Link href='/snippets'>
                <div className='mt-2 font-medium md:mt-0 hover:text-gray-500'>Code Snippets</div>
              </Link>

              {/* <a
                href='https://dstroot.github.io/readme/'
                className='font-medium hover:text-gray-500'
              >
                User Guide
              </a> */}
            </div>
          </div>
        </div>

        {/* 
            Bottom Section
        */}
        <div className='flex flex-col items-center justify-between md:flex-row md:items-end'>
          <div className='flex items-center order-2 text-xs tracking-wide md:order-1 dark:text-gray-400'>
            Crafted with ♥️ in California.&nbsp;&copy;&nbsp;
            {year.getFullYear()}
            {','}&nbsp;
            <Link href='/analytics'>
              <div className='font-medium'>Dan Stroot</div>
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
          <div className='flex items-center order-1 my-3 space-x-4 text-2xl md:order-2 md:my-0'>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
};
