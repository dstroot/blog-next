import Head from "next/head";
// import Script from "next/script";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export const Meta = () => {
  return (
    <Head>
      <link rel="manifest" href="site.webmanifest" />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="maskable_icon_x192.png"
      />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon.png" />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}

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
      {/* <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"
      /> */}

      {/*
          The page supports both dark and light color schemes,
          and the preference is the order
      */}
      <meta name="color-scheme" content="light dark" />

      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`${CMS_NAME}`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />

      {/* 
      Global Site Tag (gtag.js) - Google Analytics 
      https://blog.jarrodwatts.com/track-user-behaviour-on-your-website-with-google-analytics-and-nextjs
      https://nextjs.org/docs/basic-features/script
      */}
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'XXXXXXXXXX', {
            page_path: window.location.pathname,
          });
        `}
      </Script> */}
    </Head>
  );
};
