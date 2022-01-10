import Link from 'next/link';
import Image from 'next/image';
import { connectStateResults } from 'react-instantsearch-dom';

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className='grid grid-cols-1 gap-4 w-full lg:grid-cols-2 xl:grid-cols-3 mb-6'>
          {searchResults.hits.map((hit) => (
            <>
              {/* <p>{JSON.stringify(hit)}</p> */}
              <PostCard key={hit.objectID} hit={hit}></PostCard>
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default connectStateResults(Hits);

const PostCard = ({ hit }) => {
  return (
    <div className='flex flex-col p-5 space-y-3 w-full rounded shadow-md bg-gray-100 dark:bg-gray-700'>
      <div className='flex flex-col'>
        <div className='w-full'>
          <Image
            src={hit.image}
            width={708}
            height={354}
            alt={`Cover Image for ${hit.title}`}
            layout='responsive'
          />
        </div>
        <Link href={`/posts/${hit.slug}`}>
          <a className='w-3/4'>
            <h1 className='text-xl md:text-2xl font-bold truncate overflow-hidden'>{hit.title}</h1>
          </a>
        </Link>
      </div>
      <p className='text-slate'>{hit.excerpt}</p>
      <div className='flex space-x-2 text-xs'>
        <span className='px-2 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-800 rounded-full'>
          {hit.readingTime}
        </span>
        <span className='px-2 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-800 rounded-full'>
          Published: {hit.date}
        </span>
      </div>
    </div>
  );
};
