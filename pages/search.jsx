import Head from 'next/head';

import { Search } from '../components/Search';
import { CMS_NAME } from '../lib/constants';
import { Container } from '../components/Container';

export default function Index() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Search</title>
      </Head>

      <Container>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-center md:text-left before:tracking-tighter leading-tight md:leading-none mb-8 md:mb-12'>
          Search
        </h1>
        <Search />
      </Container>
    </>
  );
}
