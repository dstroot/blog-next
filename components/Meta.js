import Head from 'next/head';
import { CMS_NAME, BASE_URL, HOME_OG_IMAGE_URL } from '../lib/constants';

export const Meta = (props) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: 'Dan Stroot · Blog',
    description: 'Dan Stroot · The most popular blog in the world.',
    image: HOME_OG_IMAGE_URL, // eg: https://learnnext-blog.vercel.app/img/banner-800x514.png
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <link rel='manifest' href='site.webmanifest' />
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <link
        rel='apple-touch-icon'
        sizes='192x192'
        href='maskable_icon_x192.png'
      />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
      <link rel='shortcut icon' href='favicon.png' />

      {/*
          CSS and scripts to support syntax highlighting
          https://www.filamentgroup.com/lab/load-css-simpler/
      */}

      {/* 
      This is a trick to asyncronously load css that is needed later. Load for "print" 
      and switch to "all" when loaded.
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
          The page supports both dark and light color schemes,
          and the preference is the order
      */}
      <meta name='color-scheme' content='light dark' />
      <meta name='theme-color' content='#000' />

      {/* Meta Tags */}
      <title>Dan Stroot · Blog</title>
      <meta name='robots' content='follow, index' />
      <meta
        name='description'
        content='Dan Stroot · The most popular blog in the world.'
      />
      <meta name='author' content='Dan Stroot' />

      {/* Open Graph Tags 
      
        In SEO, we're obsessed with fine-tuning our titles and meta descriptions to get the highest possible click-through rate
      */}
      <meta property='og:image' content={HOME_OG_IMAGE_URL} key='image' />
      <meta property='og:title' content={`${CMS_NAME}`} key='title' />
      {/*
        Add it to all “shareable” pages.
        Focus on accuracy, value, and clickability.
        Keep it short to prevent overflow. There’s no official guidance 
        on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
        Use the raw title. Don’t include branding (e.g., your site name). 
      */}
      <meta
        property='og:description'
        content='Dan Stroot · The most popular blog in the world.'
        key='description'
      />
      {/*
        Complement the title to make the snippet as appealing and click-worthy as possible.
        Copy your meta description here if it makes sense. 
        Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.
      */}
      <meta property='og:url' content={`${BASE_URL}`} key='url' />
      {/*
        Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
        Use your logo or any other branded image for the rest of your pages.
        Use images with a 1.91:1 ratio and minimum recommended dimensions of 
        1200x630 for optimal clarity across all devices.
      */}
      <meta property='og:type' content='website' key='type' />

      {/*
        Twitter Tags

        Twitter Cards are essentially tweets on steroids. In addition to your 140-character message, you can include images, videos, audio, and download links. This makes your tweet much more dynamic and highly clickable.

        https://www.contentkingapp.com/academy/twitter-cards/

        There are four Twitter Card types you can use:

          Summary Card
          Summary Card with Large Image
          App Card
          Player Card
      */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@danstroot' />
      <meta name='twitter:title' content={`${CMS_NAME}`} />
      <meta
        name='twitter.description'
        content='Dan Stroot · The most popular blog in the world.'
      />
      <meta name='twitter:image' content={HOME_OG_IMAGE_URL} />
      <meta name='twitter:creator' content='@danstroot' />

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
