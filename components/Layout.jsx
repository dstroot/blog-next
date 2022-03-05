import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { Meta } from './Meta';
import { Footer } from './Footer';
// import { CommandPalette } from './CommandPalette';

export const Layout = ({ children }) => {
  const router = useRouter();

  /* Handle Keyboard Input */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        event.stopPropagation();
        router.push(`/search`);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <>
      <Meta />
      {/* <CommandPalette /> */}
      <div className='flex flex-col min-h-screen'>
        {/* <Header /> */}
        <main className='flex-grow'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

/* Sticky footer pattern used above:

<div className='flex flex-col min-h-screen'>
  <header></header>
  <main className='flex-grow'>{children}</main>
  <footer></footer>
</div>

*/
