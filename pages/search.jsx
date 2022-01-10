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
        <Search />
      </Container>
    </>
  );
}

