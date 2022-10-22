import { ImageResponse } from '@vercel/og';
import { CMS_NAME, TAGLINE } from '../../../lib/constants';
// import author from '../assets/blog/authors/dan.jpeg';
// see: https://og-playground.vercel.app/ to test images
// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation

export const config = {
  runtime: 'experimental-edge',
};

export default async function ogimage() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          }}
        >
          <div tw='flex'>
            <img
              width='256'
              height='256'
              src={`https://www.danstroot.com/_next/image?url=%2Fassets%2Fblog%2Fauthors%2Fdan.jpeg&w=640&q=90`}
              style={{
                borderRadius: 128,
                marginRight: 75,
              }}
            />
            <img
              width='808'
              height='258'
              src={`https://www.danstroot.com/_next/image?url=%2Fassets%2Fblog%2Ftheme%2Fdjs_logo.png&w=640&q=90`}
              style={{}}
            />

            <div tw='flex flex-col'>
              <p tw='font-bold leading-tight tracking-tighter text-7xl'>{CMS_NAME + ' · Blog'}</p>
              <p tw='mt-2 ml-2 italic font-semibold text-3xl'>{TAGLINE}.</p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
