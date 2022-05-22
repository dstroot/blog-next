import { ReadStats } from './ReadStats';
import { Views } from './Views';
import { useViewCount } from '../hooks/useViewCount';

export const MoreStats = ({ slug, stats }) => {
  const { views, isLoading, isError } = useViewCount(slug);

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error...</p>;

  return (
    <div className='flex items-center justify-between mt-2 text-sm text-gray-600 transition-colors dark:text-gray-300'>
      <div>
        <ReadStats stats={stats} />
      </div>
      <div>{isLoading ? null : <Views viewCount={views} />}</div>
    </div>
  );
};
