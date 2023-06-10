import Script from 'next/script';
import { Layout } from '../components/Layout';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

/* -- Global Styles -- */
import 'prismjs/themes/prism-tomorrow.css';
import '../styles/index.css';

// https://nextjs.org/docs/advanced-features/custom-app
// https://jools.dev/nextjs-_appjs-example
// https://medium.com/geekculture/privacy-friendly-website-analytics-with-umami-and-nextjs-8b587aecc916

//https://www.axiom.co/docs/integrations/vercel
export function reportWebVitals(metric) {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

  if (!url) {
    return;
  }

  const body = JSON.stringify({
    route: window.__NEXT_DATA__.page,
    ...metric,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager */}
      {process.env.NEXT_PUBLIC_GTM_ACCOUNT && (
        <Script
          id='gtm'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ACCOUNT}');
          `,
          }}
        />
      )}
      {/* Umami */}
      {/*process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          id='umami'
          strategy='afterInteractive'
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      )*/}
      {/* Wrap with ThemeProvider and Layout */}
      <ThemeProvider attribute='class' enableColorScheme={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      <Analytics />
    </>
  );
}
