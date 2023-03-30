import Head from 'next/head';

export const Meta = () => {
  return (
    <Head>
      <meta name='robots' content='follow, index' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <link rel='manifest' href='/site.webmanifest' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />

      {/* ICONS */}
      <link rel='apple-touch-icon' sizes='192x192' href='/maskable_icon_x192.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />
      <link rel='shortcut icon' href='/favicon.png' />
      <link rel='me' href='https://mastodon.social/@dstroot' />

      {/*
          COLOR: The page supports both dark and light color
          schemes, and the preference is the order: light first
      */}
      <meta name='color-scheme' content='light dark' />
      <meta name='theme-color' content='#000' />
    </Head>
  );
};
