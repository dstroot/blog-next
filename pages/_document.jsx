import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// https://nextjs.org/docs/advanced-features/custom-document
// A custom Document is used to augment your application's <html> and <body> tags.
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='antialiased text-gray-800 transition-colors bg-white dark:bg-dark-1 dark:text-gray-100'>
          {/* Google Tag Manager */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ACCOUNT}`}
              height='0'
              width='0'
              className='invisible hidden'
            />
          </noscript>
          <Main />
          <NextScript />
          {/*
          Scripts that load with the beforeInteractive strategy are injected into the initial HTML from the server and run before self-bundled JavaScript is executed. This strategy should be used for any critical scripts that need to be fetched and executed before any page becomes interactive. This strategy **only works inside _document.js** and is designed to load scripts that are needed by the entire site (i.e. the script will load when any page in the application has been loaded server-side).
           */}
          <Script
            id='theme'
            strategy='beforeInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              !function(){try {var d=document.documentElement.classList;d.remove('light','dark');var e=localStorage.getItem('theme');if("system"===e||(!e&&true)){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?d.add('dark'):d.add('light')}else if(e) d.add(e)}catch(e){}}()
            `,
            }}
          ></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
