module.exports = {
  poweredByHeader: false,
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   // domains: ["assets.vercel.com"],
  //   // These widths are used when the next/image component uses layout="responsive"
  //   // or layout="fill" so that the correct image is served for the device visiting your website.
  //   // deviceSizes: [335, 556, 684, 728, 984, 1240, 1496],
  // },
  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  async redirects() {
    return [
      // this one just trims the old date paths
      // {
      //   source: "/(\\d{1,})/(\\d{1,})/(\\d{1,})/:slug",
      //   destination: "/posts/:slug", // Matched parameters can be used in the destination
      //   permanent: false,
      // },
      // this rebuilds the path to match the new format
      {
        source: '/:yr(\\d{1,})/:mo(\\d{1,})/:d(\\d{1,})/:slug',
        destination: '/posts/:yr-:mo-:d-:slug', // Matched parameters can be used in the destination
        permanent: false,
      },
    ];
  },
};
