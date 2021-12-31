import useSWR from 'swr';

export const useViewCounts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/views', fetcher);

  console.log('use: ' + data);

  if (error) {
    console.log(error.message);
    return null;
  }

  if (!data) return null;

  return data;
};
