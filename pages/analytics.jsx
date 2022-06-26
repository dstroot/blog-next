import { Stats } from '../components/Stats';
import Head from 'next/head';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';

export default function Index() {
  const title = `${CMS_NAME} · Analytics`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container>
        <Header />

        <h1 className='mb-8 text-4xl font-bold leading-tight text-center md:text-6xl lg:text-7xl md:text-left before:tracking-tighter md:leading-none md:mb-12'>
          Analytics
        </h1>

        <Stats />

        <div className='flex flex-col p-6 mt-6 text-xl'>
          <span className='mt-4 mb-1 font-bold text-gray-700 uppercase dark:text-gray-100 md:mt-0 min-w-max'>
            Other Tools
          </span>
          <a
            className='font-medium hover:text-gray-500'
            href='https://analytics.google.com/analytics/web/#/p295106308/reports/dashboard?r=reporting-hub'
          >
            Google Analytics
          </a>
          <a
            className='font-medium hover:text-gray-500'
            href='https://umami-production-3f4a.up.railway.app/website/1/blog'
          >
            Umami Analytics
          </a>
          <a
            className='font-medium hover:text-gray-500'
            href='https://vercel.com/dstroot/blog-next/analytics'
          >
            Vercel Analytics
          </a>
        </div>
      </Container>
    </>
  );
}
