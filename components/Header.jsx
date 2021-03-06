import Link from 'next/link';

export const Header = () => {
  return (
    <h2 className='text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 md:mb-12'>
      <Link href='/'>
        <a className='hover:underline'>{'< Blog'}</a>
      </Link>
    </h2>
  );
};
