import Head from 'next/head';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';
import { DarkMode } from '../components/DarkMode';

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

export default function About() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Colors</title>
      </Head>

      <Container>
        <Header />
        <div className='grid grid-flow-row grid-cols-4 grid-rows-3 gap-4 text-center'>
          <div className='col-span-2 bg-white text-gray-900 p-10 text-2xl'>
            Light
          </div>
          <div className='col-span-2 bg-dark-1 text-gray-100 text-2xl p-10'>
            Dark
          </div>

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
          <div className='bg-gray-100 text-gray-700 text-xs font-light p-10'>
            Text
          </div>
          <div className='bg-gray-100 text-gray-800 text-xs font-semibold p-10'>
            Header
          </div>
          <div className='bg-dark-4 text-gray-100 text-xs font-semibold p-10'>
            Header
          </div>
          <div className='bg-dark-4 text-gray-300 text-xs font-light p-10'>
            Text
          </div>

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

          <div style={lightBackground} className='text-xs font-light text-left'>
            <span style={lightTextMuted}>Copyright © 2021 </span>
            <a
              style={lightText}
              className='hover:underline font-semibold'
              href='#'
            >
              Apple Inc.
            </a>{' '}
            <span style={lightTextMuted}>All rights reserved.</span>
          </div>
          <a
            style={lightBackground}
            className='text-xs font-semibold hover:underline'
            href='#'
          >
            <span style={lightTextHeader}>Apple Inc.</span>
          </a>
          <a
            style={darkBackground}
            className='text-xs font-semibold hover:underline'
            href='#'
          >
            <span style={darkTextHeader}>Apple Inc.</span>
          </a>
          <div style={darkBackground} className='text-xs font-light text-left'>
            <span style={darkTextMuted}>Copyright © 2021 </span>
            <a
              style={darkText}
              className='hover:underline font-semibold'
              href='#'
            >
              Apple Inc.
            </a>{' '}
            <span style={darkTextMuted}>All rights reserved.</span>
          </div>
          <a href='https://developer.apple.com/'>
            https://developer.apple.com/
          </a>
          <DarkMode />
        </div>
        <DarkMode />
      </Container>
    </>
  );
}
