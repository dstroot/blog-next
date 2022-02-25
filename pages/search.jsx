import Head from 'next/head';
import algoliasearch from 'algoliasearch/lite';
import { CMS_NAME } from '../lib/constants';
import { Container } from '../components/Container';
import { SearchBox } from '../components/SearchBox';
import { SearchHits } from '../components/SearchHits';
import { InstantSearch } from 'react-instantsearch-dom';

export default function Index() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
  );

  return (
    <>
      <Head>
        <title>{CMS_NAME} · Search</title>
      </Head>

      <Container>
        <h1 className='mb-8 text-4xl font-bold leading-tight text-center md:text-6xl lg:text-7xl md:text-left before:tracking-tighter md:leading-none md:mb-12'>
          Full-Text Search
        </h1>
        <InstantSearch searchClient={searchClient} indexName='blog'>
          <SearchBox />
          <SearchHits />
        </InstantSearch>
      </Container>
    </>
  );
}

// https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/react/

// <SearchBox
// Optional parameters
// defaultRefinement={string}
// autoFocus={true}
// searchAsYouType={false}
// showLoadingIndicator={boolean}
// submit={React.Node}
// reset={React.Node}  // can also pass "reset={null}" to remove the reset button
// loadingIndicator={React.Node}
// focusShortcuts={string[]}
// onSubmit={function}
// onReset={function}
// on*={function}
// translations={object}
// />;
