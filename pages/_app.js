// import { useEffect } from 'react';
import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components/Layout';

// https://nextjs.org/docs/advanced-features/custom-app
// https://jools.dev/nextjs-_appjs-example
export default function MyApp({ Component, pageProps }) {
  // load simple service worker
  // useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker.register('/serviceWorker.js').then(
  //       function (registration) {
  //         console.log(
  //           'Service Worker registration successful with scope: ',
  //           registration.scope
  //         );
  //       },
  //       function (err) {
  //         console.log('Service Worker registration failed: ', err);
  //       }
  //     );
  //   }
  // }, []);

  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
