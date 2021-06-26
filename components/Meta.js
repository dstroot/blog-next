import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export const Meta = () => {
  return (
    <Head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      {/*
          CSS and scripts to support syntax highlighting
          https://www.filamentgroup.com/lab/load-css-simpler/
      */}

      <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css"
        media="print"
        onLoad="this.media='all'"
      />
      <script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js"
      ></script>
      <script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"
      ></script>

      {/*
          The page supports both dark and light color schemes,
          and the preference is the order
      */}
      <meta name="color-scheme" content="light dark" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`${CMS_NAME}`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};
