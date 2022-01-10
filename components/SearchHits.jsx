import { connectStateResults } from 'react-instantsearch-dom';

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Aw snap! No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li key={hit.objectID}>{(hit.title, JSON.stringify(hit))}</li>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(Hits);
