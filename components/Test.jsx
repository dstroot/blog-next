import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import algoliasearch from 'algoliasearch/lite';
import { SearchBox } from './SearchBox';
import { InstantSearch, connectStateResults } from 'react-instantsearch-dom';
import Link from 'next/link';

export function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );

  /* Handle Keyboard Input */
  useEffect(() => {
    function handleKeyDown(event) {
      event.preventDefault();
      event.stopPropagation();

      /* e key for error - ha! */
      if (event.key === 'e' && (event.ctrlKey || event.metaKey)) {
        setIsOpen((value) => !value);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  /* minimal code to reproduce the issue */
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <Dialog.Overlay className='fixed inset-0 bg-gray-200/75 dark:bg-gray-800/75' />
      <div className='flex items-center justify-center min-h-screen'>
        <div className='relative mx-auto bg-white'>
          <input />
          {/* <InstantSearch searchClient={searchClient} indexName='blog'>
            <SearchBox />
            <SearchHits />
          </InstantSearch> */}
        </div>
      </div>
    </Dialog>
  );
}

// return (
//   <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed top-0 z-10'>
//     <Combobox>
//       <div>Hello</div>
//       <Combobox.Input /> {/* comment this out to see it work properly */}
//     </Combobox>
//   </Dialog>
// );

const PostList = ({ hit }) => {
  return (
    <Link href={`/posts/${hit.slug}`}>
      <a className='mt-4 text-lg font-bold line-clamp-1'>{hit.title}</a>
    </Link>
  );
};

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
            <PostList key={hit.objectID} hit={hit}></PostList>
          ))}
        </div>
      )}
    </>
  );
};

const SearchHits = connectStateResults(Hits);
