import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';
import { DarkMode } from '../components/DarkMode';
import { Container } from '../components/Container';

// images
import card from '../public/assets/blog/img/black_card.jpg';

const darkBackground = {
  backgroundColor: '#1D1E20', // 2A2B2D  1D1E20
  padding: '40px',
};

const darkText = {
  color: '#A1A1A6',
};

const darkTextHeader = {
  color: '#F5F5F7',
};

const darkTextMuted = {
  color: '#6E6E73',
};

const lightBackground = {
  backgroundColor: '#F5F5F7',
  padding: '40px',
};

const lightText = {
  color: '#515154',
};

const lightTextHeader = {
  color: '#515154',
};

const lightTextMuted = {
  color: '#86868b',
};

export default function Index() {
  const title = `${CMS_NAME} · Colors`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container>
        <Header />
        <div className='grid grid-flow-row grid-cols-4 grid-rows-3 gap-4 text-center'>
          <div className='col-span-2 p-10 text-2xl text-gray-900 bg-white'>Light</div>
          <div className='col-span-2 p-10 text-2xl text-gray-100 bg-dark-1'>Dark</div>
          {/*
            Basic Styles
            */}
          <div style={lightBackground} className='text-xs font-light'>
            <span style={lightText}>Text</span>
          </div>
          <div style={lightBackground} className='text-xs font-semibold'>
            <span style={lightTextHeader}>Header</span>
          </div>
          <div style={darkBackground} className='text-xs font-semibold'>
            <span style={darkTextHeader}>Header</span>
          </div>
          <div style={darkBackground} className='text-xs font-light'>
            <span style={darkText}>Text</span>
          </div>
          {/*
            Basic Styles
            */}
          <div className='p-10 text-xs font-light text-gray-700 bg-gray-100'>Text</div>
          <div className='p-10 text-xs font-semibold text-gray-800 bg-gray-100'>Header</div>
          <div className='p-10 text-xs font-semibold text-gray-100 bg-dark-4'>Header</div>
          <div className='p-10 text-xs font-light text-gray-300 bg-dark-4'>Text</div>
          {/*
            Links
            */}
          <div style={lightBackground} className='text-xs font-light'>
            <a href='#' className='hover:underline'>
              <span style={lightText}>Text</span>
            </a>
          </div>
          <div style={lightBackground} className='text-xs font-semibold'>
            <a href='#' className='hover:underline'>
              <span style={lightTextHeader}>Header</span>
            </a>
          </div>
          <div style={darkBackground} className='text-xs font-semibold'>
            <a href='#' className='hover:underline'>
              <span style={darkTextHeader}>Header</span>
            </a>
          </div>
          <div style={darkBackground} className='text-xs font-light'>
            <a href='#' className='hover:underline'>
              <span style={darkText}>Text</span>
            </a>
          </div>
          {/*
            Links
            */}
          <div className='p-12 text-xs font-light bg-blue0'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue1'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue2'>text</div>
          <div className='p-12 text-xs font-light bg-blue3'>text</div>
          <div className='p-12 text-xs font-light bg-blue4'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue5'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue6'>text</div>
          <div className='p-12 text-xs font-light bg-blue7'>text</div>
          <div className='p-12 text-xs font-light bg-blue8'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue9'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue10'>text</div>
          <div className='p-12 text-xs font-light bg-blue11'>text</div>
          <div className='p-12 text-xs font-light bg-blue12'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue13'>text</div>
          <div className='p-12 text-xs font-semibold bg-blue14'>text</div>
          <div className='p-12 text-xs font-light bg-blue15'>text</div>
          {/* https://www.youtube.com/watch?v=IHaT_rjC2gM */}
          {/*
            Links
            */}
          <div style={lightBackground} className='text-xs font-light text-left'>
            <span style={lightTextMuted}>Copyright © 2021 </span>
            <a style={lightText} className='font-semibold hover:underline' href='#'>
              Apple Inc.
            </a>{' '}
            <span style={lightTextMuted}>All rights reserved.</span>
          </div>
          <a style={lightBackground} className='text-xs font-semibold hover:underline' href='#'>
            <span style={lightTextHeader}>Apple Inc.</span>
          </a>
          <a style={darkBackground} className='text-xs font-semibold hover:underline' href='#'>
            <span style={darkTextHeader}>Apple Inc.</span>
          </a>
          <div style={darkBackground} className='text-xs font-light text-left'>
            <span style={darkTextMuted}>Copyright © 2021 </span>
            <a style={darkText} className='font-semibold hover:underline' href='#'>
              Apple Inc.
            </a>{' '}
            <span style={darkTextMuted}>All rights reserved.</span>
          </div>

          <a href='https://developer.apple.com/'>https://developer.apple.com/</a>
          <DarkMode />
        </div>
        <div className='flex flex-row w-full'>
          <div style={lightBackground} className='w-1/2 h-48'></div>
          <div style={darkBackground} className='w-1/2 h-48'>
            <div className='p-8 rounded overlay'></div>
            <div className='p-2 rounded warning-light'></div>
            <div className='p-2 rounded error-light'></div>
            <div className='p-2 rounded success-light'></div>
          </div>
          <div className='p-12 warning-light'></div>
          <div className='p-12 warning-dark'></div>
          <div className='p-12 error-light'></div>
          <div className='p-12 error-dark'></div>
          <div className='p-12 success-light'></div>
          <div className='p-12 success-dark'></div>
        </div>
        <DarkMode />

        <div className='flex flex-row space-x-4'>
          <div className='max-w-sm overflow-hidden rounded shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold text-gray-700 dark:text-gray-300'>
                Mountain
              </div>
              <p className='text-base text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-400'>
                #photography
              </span>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-400'>
                #travel
              </span>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-400'>
                #winter
              </span>
            </div>
          </div>

          <div className='max-w-sm overflow-hidden rounded shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold blue7 dark:blue4'>Mountain</div>
              <p className='text-base text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full error-dark dark:error-light dark:text-gray-100'>
                #photography
              </span>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full success-dark dark:success-light dark:text-gray-100'>
                #travel
              </span>
              <span className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full warning-dark dark:warning-light dark:text-gray-100'>
                #winter
              </span>
            </div>
          </div>

          <div className='max-w-sm overflow-hidden rounded shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold text-gray-700 dark:text-gray-300'>
                <span className='error-text'>Mountain </span>
                <span className='warning-text'>Mountain </span>
                <span className='success-text'>Mountain </span>
              </div>
              <p className='text-base text-gray-600 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <div className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full error-light dark:error-dark dark:text-gray-100'>
                #photography
              </div>
              <div className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full success-light dark:success-dark dark:text-gray-100'>
                #travel
              </div>
              <div className='inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full warning-light dark:warning-dark dark:text-gray-100'>
                #winter
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
