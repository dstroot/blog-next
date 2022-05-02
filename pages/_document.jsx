import Document, { Html, Head, Main, NextScript } from 'next/document';

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
        </body>
      </Html>
    );
  }
}

export default MyDocument;
