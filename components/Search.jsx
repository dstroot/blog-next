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
        <SearchBox
          // Optional parameters
          // defaultRefinement={string}
          autoFocus={true}
          searchAsYouType={false}
          // showLoadingIndicator={boolean}
          // submit={React.Node}
          // reset={React.Node}  // can also pass "reset ={null}" to remove the reset button
          // loadingIndicator={React.Node}
          // focusShortcuts={string[]}
          // onSubmit={function}
          // onReset={function}
          // on*={function}
          // translations={object}
        />
        <SearchHits />
      </InstantSearch>
    </>
  );
};

// https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/react/
