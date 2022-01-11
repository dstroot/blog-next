import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import { SearchBox } from './SearchBox';
import { SearchHits } from './SearchHits';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
);

export const Search = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName='blog'>
        <SearchBox />
        <SearchHits />
      </InstantSearch>
    </>
  );
};
