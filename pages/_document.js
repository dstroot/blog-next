import Document, { Html, Head, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
// A custom Document is commonly used to augment your application's <html> and <body> tags.
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='transition-colors bg-white text-gray-800 dark:bg-dark-1 dark:text-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
