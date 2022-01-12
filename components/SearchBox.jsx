import { useState } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

const Search = ({ refine }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    refine(search);
    // setSearch('');
  };

  return (
    <form noValidate action='' role='search' className='flex justify-center my-6'>
      <div className=' relative mx-auto text-gray-600 dark:text-gray-400 w-full md:w-3/4'>
        <input
          type='search'
          className='border-2 border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 h-12 px-5 pr-16 w-full rounded-full focus:outline-none'
          placeholder='Search...'
          aria-label='Search...'
          autoComplete='off'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          value={search}
          // onChange={(e) => refine(e.currentTarget.value)}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className='absolute right-0 top-0 mt-4 mr-4'>
          <svg
            className=' h-5 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 56.966 56.966'
            style={{ enableBackground: 'new 0 0 56.966 56.966' }}
            xmlSpace='preserve'
          >
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </div>
    </form>
  );
};

export const SearchBox = connectSearchBox(Search);

// https://reactjs.org/docs/forms.html
// https://www.algolia.com/doc/api-reference/widgets/search-box/react/#widget-param-submit

{
  /* <div className='bg-white dark:bg-gray-900 relative pointer-events-auto'>
  <button
    type='button'
    className='hidden w-full lg:flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 dark:bg-gray-800 dark:highlight-white/5 dark:hover:bg-gray-700'
  >
    <svg width='24' height='24' fill='none' aria-hidden='true' className='mr-3 flex-none'>
      <path
        d='m19 19-3.5-3.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
      <circle
        cx='11'
        cy='11'
        r='6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></circle>
    </svg>
    Quick search...<span className='ml-auto pl-3 flex-none text-xs font-semibold'>⌘K</span>
  </button>
</div>; */
}

{
  /* <header className='DocSearch-SearchBar'>
  <form action='' role='search' noValidate='' className='DocSearch-Form'>
    <label className='DocSearch-MagnifierLabel' htmlFor='docsearch-input' id='docsearch-label'>
      <svg width='20' height='20' className='DocSearch-Search-Icon' viewBox='0 0 20 20'>
        <path
          d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
          stroke='currentColor'
          fill='none'
          fillRule='evenodd'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </label>
    <div className='DocSearch-LoadingIndicator'>
      <svg viewBox='0 0 38 38' stroke='currentColor' stroke-Opacity='.5'>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(1 1)' strokeWidth='2'>
            <circle stroke-Opacity='.3' cx='18' cy='18' r='18'></circle>
            <path d='M36 18c0-9.94-8.06-18-18-18'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 18 18'
                to='360 18 18'
                dur='1s'
                repeatCount='indefinite'
              ></animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
    <input
      className='DocSearch-Input'
      aria-autocomplete='list'
      aria-labelledby='docsearch-label'
      id='docsearch-input'
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
      placeholder='Search documentation'
      maxLength='64'
      type='search'
      value=''
    />
    <button type='reset' title='Clear the query' className='DocSearch-Reset' hidden=''>
      <svg width='20' height='20' viewBox='0 0 20 20'>
        <path
          d='M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z'
          stroke='currentColor'
          fill='none'
          fillRule='evenodd'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </svg>
    </button>
  </form>
  <button className='DocSearch-Cancel'>Cancel</button>
</header>; */
}

{
  /* <SearchBox
  // Optional parameters
  defaultRefinement={string}
  autoFocus={boolean}
  searchAsYouType={boolean}
  showLoadingIndicator={boolean}
  submit={React.Node}
  reset={React.Node}
  loadingIndicator={React.Node}
  focusShortcuts={string[]}
  onSubmit={function}
  onReset={function}
  on*={function}
  translations={object}
/> */
}
