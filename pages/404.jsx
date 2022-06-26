import Head from 'next/head';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';
import { Container } from '../components/Container';

// https://nextjs.org/docs/advanced-features/custom-error-page
export default function Custom404() {
  const title = `${CMS_NAME} · 404`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container>
        <Header />
        <div className='flex flex-col items-center justify-center mt-20 md:flex-row'>
          <div className='pb-3 font-bold leading-tight tracking-tighter border-b-4 text-8xl md:border-r-4 md:border-b-0 md:pr-6'>
            404
          </div>
          <div className='pt-3 text-xl italic font-semibold md:text-2xl md:pl-6'>
            This page could not be found.
          </div>
        </div>
      </Container>
    </>
  );
}
