import Head from 'next/head';

export const Meta = () => {
  return (
    <Head>
      <meta name='robots' content='follow, index' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel='manifest' href='/site.webmanifest' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />

      {/* ICONS */}
      <link
        rel='apple-touch-icon'
        sizes='192x192'
        href='/maskable_icon_x192.png'
      />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      <link rel='shortcut icon' href='/favicon.png' />

      {/*
          CSS and scripts to support syntax highlighting
          https://www.filamentgroup.com/lab/load-css-simpler/
      */}

      {/*
          NOTE: This is a trick to asyncronously load css that is needed later. 
          Load for "print" and switch to "all" when loaded.
      */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css'
        media='print'
        onLoad="this.media='all'"
        charSet='utf-8'
      />
      <script
        async
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-core.min.js'
        charSet='utf-8'
      ></script>
      <script
        async
        src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js'
        charSet='utf-8'
      ></script>

      {/*
          COLOR: The page supports both dark and light color schemes,
          and the preference is the order
      */}
      <meta name='color-scheme' content='light dark' />
      <meta name='theme-color' content='#000' />

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
