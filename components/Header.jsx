import Link from 'next/link';

export const Header = () => {
  return (
    <h2 className='mb-8 text-2xl font-bold leading-tight tracking-tight md:text-3xl md:tracking-tighter md:mb-12'>
      <Link href='/'>
        <div className='hover:underline'>{'< Blog'}</div>
      </Link>
    </h2>
  );
};
