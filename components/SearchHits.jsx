import Link from 'next/link';
import Image from 'next/image';
import { connectStateResults } from 'react-instantsearch-dom';

const Hits = ({ searchState, searchResults }) => {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <div className='text-center'>
          No results have been found for search &quot;{searchState.query}&quot;.{'  '};(
        </div>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className='grid w-full grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {searchResults.hits.map((hit) => (
            <PostCard key={hit.objectID} hit={hit}></PostCard>
          ))}
        </div>
      )}
    </>
  );
};

export const SearchHits = connectStateResults(Hits);

const PostCard = ({ hit }) => {
  return (
    <Link href={`/posts/${hit.slug}`}>
      <div className='flex flex-col w-full p-5 space-y-3 bg-gray-100 rounded shadow-md dark:bg-gray-700'>
        <div className='flex flex-col'>
          <div className='w-100'>
            <Image
              src={hit.image}
              width={708}
              height={354}
              alt={`Cover Image for ${hit.title}`}
              layout='responsive'
            />
          </div>
          <h1 className='mt-4 text-lg font-bold line-clamp-1'>{hit.title}</h1>
        </div>
        <p className='text-sm line-clamp-3'>{hit.excerpt}</p>
        <div className='flex space-x-2 text-xs'>
          <span className='px-2 py-1 text-gray-900 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800'>
            {hit.date}
          </span>
          <span className='px-2 py-1 text-gray-900 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800'>
            {hit.readingTime}
          </span>
          {hit.views ? (
            <span className='px-2 py-1 text-gray-900 bg-gray-200 rounded-full dark:bg-gray-300 dark:text-gray-800'>
              {hit.views} views
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

//https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react/
