import SnippetCard from '../../components/SnippetCard';
import { getAllFilesFrontMatter } from '../../lib/mdx';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';

function Snippets({ snippets }) {
  return (
    <Container>
      <Header />
      <h2 className='flex items-center space-x-2'>
        <h2 className='mb-4 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
          Snippets
        </h2>
      </h2>
      <p className='text-xl text-gray-500 mb-6'>
        Short solutions to discrete problems which can be copied and pasted.
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
  const snippets = await getAllFilesFrontMatter('_snippets');
  return { props: { snippets } };
}

export default Snippets;
