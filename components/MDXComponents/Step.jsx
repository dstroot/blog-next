export const Step = (props) => {
  return (
    <div className='flex flex-col items-center py-5 mx-3 space-y-3 text-center md:flex-row md:space-x-5 md:space-y-0'>
      <div className='grid place-items-center w-10 h-10 text-white text-2xl font-bold rounded-full bg-gray-400 border-4 dark:bg-gray-600 border-gray-500 dark:border-gray-400'>
        {props.number}
      </div>
      <h3 className='text-2xl font-bold text-gray-800 dark:text-gray-100'>{props.title}</h3>
    </div>
  );
};
