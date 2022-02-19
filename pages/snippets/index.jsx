import Head from 'next/head';
import { Header } from '../../components/Header';
import { CMS_NAME } from '../../lib/constants';
import { Container } from '../../components/Container';
import { SortByDate } from '../../lib/sortPosts';
import { SnippetCard } from '../../components/SnippetCard';
import { getAllFilesFrontMatter } from '../../lib/getAllFiles';

// TODO add SEO
export default function Index({ snippets }) {
  return (
    <>
      <Head>
        <title>{CMS_NAME} · Snippets</title>
      </Head>

      <Container>
        <Header />

        {/* Head */}
        <div className='flex items-center space-x-2'>
          <h2 className='mb-4 text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
            Snippets
          </h2>
        </div>
        <p className='mb-6 text-xl text-gray-500'>Short solutions to discrete problems.</p>

        {/* Grid */}
        <div className='grid w-full grid-cols-1 gap-4 mb-6 lg:grid-cols-2 xl:grid-cols-3'>
          {snippets.map((item, _idx) => (
            <SnippetCard {...snippets[_idx]} key={item.slug} />
          ))}
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  let snippets = await getAllFilesFrontMatter('data/_snippets', '.mdx');

  // remove any unpublished snippets
  snippets = snippets.filter((snippets) => snippets.published);

  // Sort list by published date
  snippets = SortByDate(snippets);

  return { props: { snippets } };
}
