import useSWR from 'swr';
import millify from 'millify';

const StatsCard = ({ name, children }) => {
  return (
    <div className='flex flex-col items-center w-full p-5 space-y-5 bg-gray-100 rounded shadow-lg dark:bg-gray-800'>
      <h1 className='text-2xl font-black text-gray-500 dark:text-gray-500'>{name}</h1>
      <span className='text-4xl font-black text-gray-700 dark:text-gray-300'>{children}</span>
    </div>
  );
};

export const Stats = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: stats } = useSWR('/api/stats', fetcher);

  return (
    <div className='grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3'>
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
  );
};
