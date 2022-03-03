import { Footer } from './Footer';
import { Meta } from './Meta';
import { CommandPalette } from './CommandPalette';
// import { Test } from './Test';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <CommandPalette />
      {/* <Test /> */}
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
