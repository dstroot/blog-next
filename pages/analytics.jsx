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
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left before:tracking-tighter leading-tight md:leading-none mb-8 md:mb-12'>
          Analytics
        </h1>
        <Stats />
      </Container>
    </>
  );
}
