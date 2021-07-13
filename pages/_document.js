import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="transition-colors duration-300 bg-white text-gray-900 dark:bg-dark-1 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
