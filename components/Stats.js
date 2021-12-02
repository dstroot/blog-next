import useSWR from 'swr';
import millify from 'millify';

export const Stats = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: stats } = useSWR('/api/stats', fetcher);

  return (
    <div className='flex flex-col mx-5'>
      <h2 className='flex items-center py-5 space-x-2 text-2xl font-bold'>
        {/* <span className='font-mono text-base'>01.</span> */}
        <span className=''>Google Analytics Stats</span>
        <span className='w-20 h-[1px] bg-white'></span>
      </h2>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* Items */}
        <div className='flex relative flex-col items-center p-5 space-y-5 w-full rounded shadow-lg dark:bg-gray-800'>
          <h1 className='text-2xl font-black tracking-wide'>Page Views</h1>
          <span className='text-5xl font-black'>{!stats ? '-' : millify(stats.pageViews)}</span>
        </div>
        {/* Items */}
        <div className='flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg dark:bg-gray-800'>
          <h1 className='text-2xl font-black tracking-wide'>Engagement Rate</h1>
          <span className='text-5xl font-black'>
            {!stats ? '-' : (stats.engagmentRate * 100).toFixed(0) + '%'}
          </span>
        </div>
        {/* Items */}
        <div className='flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg dark:bg-gray-800'>
          <h1 className='text-2xl font-black tracking-wide'>Total Users</h1>
          <span className='text-5xl font-black'>{!stats ? '-' : millify(stats.totalUsers)}</span>
        </div>
      </div>
    </div>
  );
};
