import { ImageResponse } from '@vercel/og';

// see: https://og-playground.vercel.app/ to test images
// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation

export const config = {
  runtime: 'experimental-edge',
};

export default function ogimage() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
