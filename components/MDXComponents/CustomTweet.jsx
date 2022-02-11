import { useState, useEffect } from 'react';
import { BASE_URL } from '../../lib/constants';
import { Tweet } from '../Tweet';

export const CustomTweet = ({ id }) => {
  let [tweet, setTweet] = useState(null);
  const URL =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/api/tweet/${id}`
      : `${BASE_URL}/api/tweet/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URL).then((res) => res.json());
      setTweet(data);
    };

    fetchData();
  }, [URL]);

  return (
    <>
      {tweet && (
        <div className='md:w-[550px]'>
          <Tweet tweet={tweet} />
        </div>
      )}
    </>
  );
};
