import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white text-gray-900 dark:bg-dark dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
