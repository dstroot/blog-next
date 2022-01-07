module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   concurrentFeatures: true, // react 18 needed
  //   serverComponents: true, // react 18 needed
  // },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    deviceSizes: [335, 460, 546, 600, 728, 984, 1240, 1496],
    // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // domains: [],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
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

// https://developers.google.com/tag-platform/tag-manager/web/csp
const ContentSecurityPolicy = `
  default-src 'self';
  frame-src 'self' *.youtube-nocookie.com *.twitter.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://gmail.us5.list-manage.com *.google-analytics.com *.googletagmanager.com *.twitter.com data: ;
  child-src *.youtube.com *.youtube-nocookie.com *.google.com *.twitter.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data: ;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com data: ;
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  { key: 'Access-Control-Allow-Origin', value: 'https://www.danstroot.com' },
  { key: 'Vary', value: 'Origin' },
  {
    key: 'Expect-CT',
    value: 'enforce, max-age=30',
  },
  // To opt in to a cross-origin isolated state, you need to send the following
  // HTTP headers on the main document:
  //   Cross-Origin-Embedder-Policy: require-corp
  //   Cross-Origin-Opener-Policy: same-origin
  // You can determine whether a web page is in a cross-origin isolated state
  // by examining "self.crossOriginIsolated" in the console.
  {
    key: 'Cross-Origin-Embedder-Policy',
    value: 'require-corp',
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'cross-origin',
  },
];
