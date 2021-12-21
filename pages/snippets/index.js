import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { SortByDate } from '../../lib/sortPosts';
import { SnippetCard } from '../../components/SnippetCard';
import { getAllFilesFrontMatter } from '../../lib/getAllFiles';

// TODO add SEO
export default function Index({ snippets }) {
  return (
    <Container>
      <Header />

      {/* Head */}
      <div className='flex items-center space-x-2'>
        <h2 className='mb-4 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
          Snippets
        </h2>
      </div>
      <p className='text-xl text-gray-500 mb-6'>Short solutions to discrete problems.</p>

      {/* Grid */}
      <div className='grid grid-cols-1 gap-4 w-full lg:grid-cols-2 xl:grid-cols-3 mb-6'>
        {snippets.map((item, _idx) => (
          <SnippetCard {...snippets[_idx]} key={item.slug} />
        ))}
      </div>
    </Container>
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
