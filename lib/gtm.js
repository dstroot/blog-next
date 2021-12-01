export const renderGTMSnippet = () => {
  return (
    // eslint-disable-next-line @next/next/next-script-for-ga
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${process.env.GTM_ACCOUNT}');
        `,
      }}
    />
  );
};

export const GTMPageView = (url) => {
  const pageEvent = {
    event: 'pageview',
    page: url,
  };

  window && window.dataLayer && window.dataLayer.push(pageEvent);
  return pageEvent;
};

// import { AppProps } from 'next/app';
// import Router from 'next/router';
// import React, { useEffect } from 'react';
// import { GTMPageView } from '../utils/gtm';

// function MyApp({ Component, pageProps }: AppProps) {
//   // ...

//   // Initiate GTM
//   useEffect(() => {
//     const handleRouteChange = (url: string) => GTMPageView(url);
//     Router.events.on('routeChangeComplete', handleRouteChange);
//     return () => {
//       Router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, []);

//   // ...
// }

// export default MyApp;
