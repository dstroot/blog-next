import { useState, useEffect } from 'react';
import { BASE_URL } from '../../lib/constants';
import { Tweet } from '../Tweet';

export const CustomTweet = ({ tweetID }) => {
  let [tweet, setTweet] = useState(null);
  const URL =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/api/tweet/${tweetID}`
      : `${BASE_URL}/api/tweet/${tweetID}`;

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
        <div className='md:w-4/5'>
          <Tweet tweet={tweet} />
        </div>
      )}
    </>
  );
};
