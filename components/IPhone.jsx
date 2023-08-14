import { useMediaQuery } from '../hooks/useMediaQuery';
import { BASE_URL } from '../lib/constants';

export const IPhone = () => {
  const biggerThan500 = useMediaQuery(`(min-width: 500px)`);
  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : BASE_URL;

  return (
    <>
      {biggerThan500 && (
        <div className="h-[970px] w-[480px] bg-contain bg-no-repeat bg-[url('https://danstroot.imgix.net/assets/blog/img/iphone-x.png')] m-0 grid place-content-center">
          <iframe src={URL} className='h-[800px] w-[395px] -mt-8'></iframe>
        </div>
      )}
    </>
  );
};
