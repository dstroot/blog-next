import { connectSearchBox } from 'react-instantsearch-dom';

function SearchBox({ refine }) {
  return (
    <form action='' role='search' className='flex justify-center'>
      <div className='pt-2 pb-6 relative mx-auto text-gray-600'>
        <input
          id='algolia_search'
          type='search'
          name='search'
          className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
          placeholder='Search'
          aria-label='Search'
          onChange={(e) => refine(e.currentTarget.value)}
        />
        <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
          <svg
            className='text-gray-600 h-4 w-4 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            id='Capa_1'
            x='0px'
            y='0px'
            viewBox='0 0 56.966 56.966'
            style={{ enableBackground: 'new 0 0 56.966 56.966' }}
            xmlSpace='preserve'
            width='512px'
            height='512px'
          >
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </div>
    </form>
    // <form action='' role='search' className='flex justify-center'>
    //   <div className='mb-3 xl:w-96'>
    //     <div className='input-group relative flex flex-wrap items-stretch w-full mb-4'>
    //       <input
    //         id='algolia_search'
    //         type='search'
    //         className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
    //         placeholder='Search'
    //         aria-label='Search'
    //         aria-describedby='button-addon2'
    //         onChange={(e) => refine(e.currentTarget.value)}
    //       />
    //       <button
    //         id='button-addon2'
    //         type='button'
    //         className='btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center'
    //         // onClick={(e) => refine(e.currentTarget.value)}
    //       >
    //         <svg
    //           aria-hidden='true'
    //           focusable='false'
    //           data-prefix='fas'
    //           data-icon='search'
    //           className='w-4'
    //           role='img'
    //           xmlns='http://www.w3.org/2000/svg'
    //           viewBox='0 0 512 512'
    //         >
    //           <path
    //             fill='currentColor'
    //             d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </form>
  );
}

export default connectSearchBox(SearchBox);

// https://reactjs.org/docs/forms.html

{
  /* <div className='pt-2 relative mx-auto text-gray-600'>
  <input
    className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
    type='search'
    name='search'
    placeholder='Search'
  />
  <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
    <svg
      className='text-gray-600 h-4 w-4 fill-current'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      viewBox='0 0 56.966 56.966'
      style='enable-background:new 0 0 56.966 56.966;'
      xmlSpace='preserve'
      width='512px'
      height='512px'
    >
      <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
    </svg>
  </button>
</div>; */
}
