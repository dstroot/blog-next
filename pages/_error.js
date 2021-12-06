import Head from 'next/head';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';

// https://nextjs.org/docs/advanced-features/custom-error-page
export default function InternalServerError() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · 500</title>
      </Head>

      <Container>
        <Header />
        <div className='mt-20 flex flex-col md:flex-row justify-center items-center'>
          <div className='text-8xl font-bold tracking-tighter leading-tight border-b-4 md:border-r-4 md:border-b-0 pb-3 md:pr-6'>
            500
          </div>
          <div className='font-semibold italic text-xl md:text-2xl pt-3 md:pl-6'>
            Oops look&apos;s like something broke on our side.
          </div>
        </div>
      </Container>
    </>
  );
}
