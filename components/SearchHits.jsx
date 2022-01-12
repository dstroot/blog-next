import Link from 'next/link';
import Image from 'next/image';
import { connectStateResults } from 'react-instantsearch-dom';

const Hits = ({ searchState, searchResults }) => {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <div className='grid grid-cols-1 gap-4 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6'>
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
      <a>
        <div className='flex flex-col p-5 space-y-3 w-full rounded shadow-md bg-gray-100 dark:bg-gray-700'>
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
            <span className='px-2 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-800 rounded-full'>
              {hit.date}
            </span>
            <span className='px-2 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-800 rounded-full'>
              {hit.readingTime}
            </span>
            {hit.views ? (
              <span className='px-2 py-1 bg-gray-200 dark:bg-gray-300 text-gray-900 dark:text-gray-800 rounded-full'>
                {hit.views} views
              </span>
            ) : null}
          </div>
        </div>
      </a>
    </Link>
  );
};

//https://www.algolia.com/doc/guides/building-search-ui/going-further/conditional-display/react/

// TODO use code below

// const Results = connectStateResults(({ searchState, searchResults, children }) =>
//   searchResults && searchResults.nbHits !== 0 ? (
//     children
//   ) : (
//     <div>No results have been found for {searchState.query}.</div>
//   )
// );

// <Results>
//   <Hits />
// </Results>;
