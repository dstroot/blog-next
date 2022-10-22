/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from '@vercel/og';
// import { CMS_NAME, TAGLINE } from '../../../lib/constants';

// see: https://og-playground.vercel.app/ to test images
// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
// test: https://www.opengraph.xyz/url/https%3A%2F%2Fwww.danstroot.com

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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            width='200'
            height='200'
            src={`https://www.danstroot.com/_next/image?url=%2Fassets%2Fblog%2Fauthors%2Fdan.jpeg&w=640&q=90`}
            style={{
              borderRadius: 128,
              padding: 20,
            }}
          />
          <img
            width='640'
            height='200'
            src={`https://www.danstroot.com/_next/image?url=%2Fassets%2Fblog%2Ftheme%2Fdjs_logo.jpg&w=640&q=90`}
          />
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
