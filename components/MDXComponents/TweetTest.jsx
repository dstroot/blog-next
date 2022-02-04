export const Tweet = (tweetLink) => {
  return (
    <div className='w-full px-6 py-4 my-4 border border-gray-300 rounded tweet dark:border-gray-800'>
      <div className='flex items-center'>
        <a className='flex w-12 h-12' href={tweetLink} target='_blank' rel='noopener noreferrer'>
          Tweet
        </a>
      </div>
    </div>
  );
};




