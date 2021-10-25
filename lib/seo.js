const seo = {
  common: {
    title: '',
    url: '',
    description: '',
    image: '',
    publishedDate: '',
  },
  openGraph: {
    type: 'website',
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@danstroot',
  },
};

// meta?: {
//     slug?: string;
//     title?: string;
//     image?: string;
//     summary?: string;
//     publishedAt?: string;
//   };

export const twitterSEO = (...seo) => {
  return (
    <>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={seo.twitter.handle} />
      <meta name='twitter:title' content={seo.common.title} />
      <meta name='twitter.description' content={seo.common.description} />
      <meta name='twitter:image' content={seo.common.image} />
      <meta
        property='article:published_time'
        content={seo.common.publishedDate}
      />
    </>
  );
};

export const ogSEO = (...seo) => {
  return (
    <>
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Your site name' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
    </>
  );
};
