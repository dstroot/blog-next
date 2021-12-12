import useSWR from 'swr';
import millify from 'millify';

const StatsCard = ({ name, children }) => {
  return (
    <div className='flex flex-col items-center p-5 space-y-5 w-full rounded shadow-lg bg-gray-100 dark:bg-gray-800'>
      <h1 className='text-2xl font-black text-gray-500 dark:text-gray-500'>{name}</h1>
      <span className='text-4xl font-black text-gray-700 dark:text-gray-300'>{children}</span>
    </div>
  );
};

export const Stats = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: stats } = useSWR('/api/stats', fetcher);

  return (
    <div className='flex flex-col mx-5'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left my-8'>
        Analytics
      </h1>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6'>
        {/* Total Users */}
        <StatsCard name={'Total Users'}>{!stats ? '-' : millify(stats.totalUsers)}</StatsCard>

        {/* Active Users */}
        <StatsCard name={'Active Users'}>{!stats ? '-' : millify(stats.activeUsers)}</StatsCard>

        {/* Views */}
        <StatsCard name={'Page Views'}>{!stats ? '-' : millify(stats.pageViews)}</StatsCard>

        {/* Engaged Sessions */}
        <StatsCard name={'Engaged Sessions'}>
          {!stats ? '-' : millify(stats.engagedSessions)}
        </StatsCard>

        {/* Engagement Duration */}
        <StatsCard name={'Engagement Duration'}>
          {!stats ? '-' : millify(stats.engagementDuration / stats.totalUsers / 60) + ' Min'}
        </StatsCard>

        {/* Engagement Rate */}
        <StatsCard name={'Engagement Rate'}>
          {!stats ? '-' : (stats.engagementRate * 100).toFixed(0) + '%'}
        </StatsCard>
      </div>
    </div>
  );
};
