import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Layout } from '../components/Layout';
import '../styles/prismjs/tomorrow.css';
import '../styles/index.css';

// https://nextjs.org/docs/advanced-features/custom-app
// https://jools.dev/nextjs-_appjs-example
export default function MyApp({ Component, pageProps }) {
  const gtm = process.env.NEXT_PUBLIC_GTM_ACCOUNT;
  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id='gtm'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${gtm}');
          `,
        }}
      />
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
