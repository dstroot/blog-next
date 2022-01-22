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

  return (
    <>
      <Head>
        <title>{CMS_NAME} · Colors</title>
      </Head>

      <Container>
        <Header />
        <div className='grid grid-flow-row grid-cols-4 grid-rows-3 gap-4 text-center'>
          <div className='col-span-2 bg-white text-gray-900 p-10 text-2xl'>Light</div>
          <div className='col-span-2 bg-dark-1 text-gray-100 text-2xl p-10'>Dark</div>
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
          <div className='bg-gray-100 text-gray-700 text-xs font-light p-10'>Text</div>
          <div className='bg-gray-100 text-gray-800 text-xs font-semibold p-10'>Header</div>
          <div className='bg-dark-4 text-gray-100 text-xs font-semibold p-10'>Header</div>
          <div className='bg-dark-4 text-gray-300 text-xs font-light p-10'>Text</div>
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
          <div className='text-xs font-light bg-blue0 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue1 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue2 p-12'>text</div>
          <div className='text-xs font-light bg-blue3 p-12'>text</div>
          <div className='text-xs font-light bg-blue4 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue5 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue6 p-12'>text</div>
          <div className='text-xs font-light bg-blue7 p-12'>text</div>
          <div className='text-xs font-light bg-blue8 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue9 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue10 p-12'>text</div>
          <div className='text-xs font-light bg-blue11 p-12'>text</div>
          <div className='text-xs font-light bg-blue12 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue13 p-12'>text</div>
          <div className='text-xs font-semibold bg-blue14 p-12'>text</div>
          <div className='text-xs font-light bg-blue15 p-12'>text</div>
          {/* https://www.youtube.com/watch?v=IHaT_rjC2gM */}
          {/*
            Links
            */}
          <div style={lightBackground} className='text-xs font-light text-left'>
            <span style={lightTextMuted}>Copyright © 2021 </span>
            <a style={lightText} className='hover:underline font-semibold' href='#'>
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
            <a style={darkText} className='hover:underline font-semibold' href='#'>
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
            <div className='overlay p-8 rounded'></div>
            <div className='warning-light p-2 rounded'></div>
            <div className='error-light p-2 rounded'></div>
            <div className='success-light p-2 rounded'></div>
          </div>
          <div className='warning-light p-12'></div>
          <div className='warning-dark p-12'></div>
          <div className='error-light p-12'></div>
          <div className='error-dark p-12'></div>
          <div className='success-light p-12'></div>
          <div className='success-dark p-12'></div>
        </div>
        <DarkMode />

        <div className='flex flex-row space-x-4'>
          <div className='max-w-sm rounded overflow-hidden shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-gray-700 dark:text-gray-300'>
                Mountain
              </div>
              <p className='text-gray-600 dark:text-gray-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:text-gray-400 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>

          <div className='max-w-sm rounded overflow-hidden shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 blue7 dark:blue4'>Mountain</div>
              <p className='text-gray-600 dark:text-gray-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <span className='inline-block error-dark dark:error-light rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #photography
              </span>
              <span className='inline-block success-dark dark:success-light rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #travel
              </span>
              <span className='inline-block warning-dark dark:warning-light rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #winter
              </span>
            </div>
          </div>

          <div className='max-w-sm rounded overflow-hidden shadow-lg overlay'>
            <Image src={card} alt='Black Card' layout='responsive' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 text-gray-700 dark:text-gray-300'>
                <span className='error-text'>Mountain </span>
                <span className='warning-text'>Mountain </span>
                <span className='success-text'>Mountain </span>
              </div>
              <p className='text-gray-600 dark:text-gray-400 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
              <div className='inline-block error-light dark:error-dark rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #photography
              </div>
              <div className='inline-block success-light dark:success-dark rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #travel
              </div>
              <div className='inline-block warning-light dark:warning-dark rounded-full px-3 py-1 text-sm font-semibold text-white dark:text-gray-100 mr-2 mb-2'>
                #winter
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
