import { Stats } from '../components/Stats';
import Head from 'next/head';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';

export default function Index() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Analytics</title>
      </Head>

      <Container>
        <Header />
        <h1 className='mb-8 text-4xl font-bold leading-tight text-center md:text-6xl lg:text-7xl md:text-left before:tracking-tighter md:leading-none md:mb-12'>
          Analytics
        </h1>
        <Stats />
      </Container>
    </>
  );
}
