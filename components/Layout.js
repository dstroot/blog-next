import { Footer } from './Footer';
import { Meta } from './Meta';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className='flex flex-col min-h-screen'>
        {/* <Header /> */}
        <main className='flex-grow'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

/* sticky footer pattern used above */

// <div className='flex flex-col min-h-screen'>
//   <header></header>
//   <main className='flex-grow'>{children}</main>
//   <footer></footer>
// </div>
