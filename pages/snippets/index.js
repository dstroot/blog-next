import SnippetCard from '../../components/SnippetCard';
import { getAllFilesFrontMatter } from '../../lib/mdx';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';

function Snippets({ snippets }) {
  return (
    <Container>
      <Header />

      {/* Head */}
      <div className='flex items-center space-x-2'>
        <h2 className='mb-4 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
          Snippets
        </h2>
      </div>
      <p className='text-xl text-gray-500 mb-6'>
        Short solutions to discrete problems.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 mb-6'>
        {snippets.map((item, _idx) => (
          <SnippetCard {...snippets[_idx]} key={item.slug} />
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  let snippets = await getAllFilesFrontMatter('_snippets');

  // remove unpublished snippets
  snippets = snippets.filter((snippet) => snippet.published);

  return { props: { snippets } };
}

export default Snippets;
