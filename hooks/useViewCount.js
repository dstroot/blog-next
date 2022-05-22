import useSWR from 'swr';

export const useViewCount = (slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`/api/views/${slug}`, fetcher, {
    refreshInterval: 5000,
  });

  return {
    views: data?.viewCount,
    isLoading: !error && !data,
    isError: error,
  };
};
