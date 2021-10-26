import Head from 'next/head';

// const seo = {
//   siteName: '',
//   title: CMS_NAME + ' · Blog',
//   description: 'Dan Stroot · The most obscure blog in the world.',
//   image: HOME_OG_IMAGE_URL,
//   publishedDate: '',
//   author: CMS_NAME,
//   ogType: 'website',
//   twHandle: '@danstroot',
// };

function truncateString(str, n) {
  if (str.length > n) {
    return str.substring(0, n) + '...';
  } else {
    return str;
  }
}

export const SEO = (props) => {
  const {
    siteName,
    title,
    description,
    image,
    publishedDate,
    author,
    ogType,
    twHandle,
  } = props;

  return (
    <Head>
      {/* BASIC SEO */}
      <title>{title}</title>
      <meta name='description' content={description} key='description' />
      <meta name='author' content={author} key='author' />

      {/* OPEN GRAPH */}
      <meta property='og:type' content={ogType} key='ogtype' />
      {siteName && (
        <meta property='og:site_name' content={siteName} key='ogname' />
      )}

      <meta property='og:title' content={title} key='ogtitle' />
      {/*
        TITLE: Focus on accuracy, value, and clickability.
        Keep it short to prevent overflow. There’s no official guidance
        on this, but 40 characters for mobile and 60 for desktop is roughly the sweet spot.
        Use the raw title. Don’t include branding (e.g., your site name).
      */}

      <meta
        property='og:description'
        content={description}
        key='ogdescription'
      />
      {/*
        DESCRIPTION: Complement the title to make the snippet as appealing and click-worthy as possible. Copy your meta description here if it makes sense.
        Keep it short and sweet. Facebook recommends 2–4 sentences, but that often truncates.
      */}

      <meta property='og:image' content={image} key='ogimage' />
      {/*
        IMAGE: Use custom images for “shareable” pages (e.g., homepage, articles, etc.)
        Use your logo or any other branded image for the rest of your pages.
        Use images with a 1.91:1 ratio and minimum recommended dimensions of
        1200x630 for optimal clarity across all devices.
      */}

      {/* TWITTER */}
      <meta name='twitter:card' content='summary_large_image' key='twcard' />
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

      <meta name='twitter:site' content={twHandle} key='twsite' />
      <meta name='twitter:title' content={title} key='twtitle' />
      <meta
        name='twitter.description'
        content={truncateString(description, 60)}
        key='twdescription'
      />
      <meta name='twitter:image' content={image} key='twimage' />
      {publishedDate && (
        <meta
          property='article:published_time'
          content={publishedDate}
          key='twdate'
        />
      )}
    </Head>
  );
};
