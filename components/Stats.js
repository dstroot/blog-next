import useSWR from 'swr';
import millify from 'millify';

export const Stats = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: stats } = useSWR('/api/stats', fetcher);

  return (
    <div className='flex flex-col mx-5'>
      <h2 className='flex items-center py-5 space-x-2'>
        {/* <span className='font-mono text-base'>01.</span> */}
        <span className='text-3xl font-bold'>Google Analytics Stats</span>
        <span className='w-20 h-[2px] bg-black dark:bg-white'></span>
      </h2>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6'>
        {/* Views */}
        <div className='flex relative flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-gray-100 dark:bg-gray-800'>
          <h1 className='text-2xl font-black'>Page Views</h1>
          <span className='text-5xl font-black'>{!stats ? '-' : millify(stats.pageViews)}</span>
        </div>
        {/* Engagement */}
        <div className='flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-gray-100 dark:bg-gray-800'>
          <h1 className='text-2xl font-black'>Engagement Rate</h1>
          <span className='text-5xl font-black'>
            {!stats ? '-' : (stats.engagmentRate * 100).toFixed(0) + '%'}
          </span>
        </div>
        {/* Users */}
        <div className='flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-gray-100 dark:bg-gray-800'>
          <h1 className='text-2xl font-black'>Total Users</h1>
          <span className='text-5xl font-black'>{!stats ? '-' : millify(stats.totalUsers)}</span>
        </div>
      </div>
    </div>
  );
};
