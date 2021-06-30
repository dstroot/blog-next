import "../styles/index.css";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <DefaultSeo {...SEO} /> */}
      <ThemeProvider
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
