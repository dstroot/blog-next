import Head from 'next/head';
import { processMarkdown } from '../lib/processMarkdown';
import { Header } from '../components/Header';
import { CMS_NAME } from '../lib/constants';
import { Container } from '../components/Container';

export default function Index({ data }) {
  const title = `${CMS_NAME} · Uses`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Container>
        <Header />
        <div
          className='mt-16 mb-16 prose max-w-none dark:prose-invert prose-a:no-underline'
          dangerouslySetInnerHTML={{ __html: data?.html }}
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const data = await processMarkdown('/_uses/uses.md');
  return { props: { data } };
}
