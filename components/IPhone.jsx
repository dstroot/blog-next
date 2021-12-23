import { useMediaQuery } from '../hooks/useMediaQuery';

export const IPhone = () => {
  const biggerThan500 = useMediaQuery(`(min-width: 500px)`);

  return (
    <>
      {biggerThan500 && (
        <div className="h-[970px] w-[480px] bg-contain bg-no-repeat bg-[url('/assets/blog/img/iphone-x.png')] m-0 grid place-content-center	">
          <iframe src='http://localhost:3000' className='h-[812px] w-[385px] -mt-8'></iframe>
        </div>
      )}
    </>
  );
};
