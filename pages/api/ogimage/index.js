/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from '@vercel/og';
import { CMS_NAME, TAGLINE } from '../../../lib/constants';

// see: https://og-playground.vercel.app/ to test images
// docs: https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation
// test: https://www.opengraph.xyz/url/https%3A%2F%2Fwww.danstroot.com
// test: https://opengraph.dev/panel?url=https%3A%2F%2Fwww.danstroot.com
// example repo: https://github.com/scastiel/github-business-card

export const config = {
  runtime: 'edge',
};

const USERNAME = 'dstroot';
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;

export default async function ogimage() {
  const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
    headers: { Authorization: `Basic ${process.env.GITHUB_PERSONAL_TOKEN}` },
  });

  // error checking
  if (res.status === 404) {
    return errorResponse(`No GitHub user with username “${USERNAME}”.`);
  }
  if (res.status !== 200) {
    return errorResponse('An error occurred when fetching information. Token may have expired.');
  }

  const user = await res.json();

  try {
    return new ImageResponse(
      (
        <div tw='bg-white flex w-full h-full items-center justify-center'>
          <div tw='flex w-1/3 justify-end pb-12 mr-12'>
            <div tw='flex flex-col items-center'>
              <img
                src={user.avatar_url}
                tw='w-64 h-64 rounded-full shadow-2xl mt-8'
                style={{ objectPosition: 'center', objectFit: 'cover' }}
              />
              {/* <div tw='text-xl text-slate-500 mt-4'>{`Since ${new Date(
                  user.created_at
                ).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}`}</div> */}
            </div>
          </div>
          <div tw='flex w-2/3 flex-col'>
            <div tw='text-7xl mb-4'>{CMS_NAME + ' · Blog'}</div>
            {/* <div tw='text-3xl text-slate-600 mb-2 flex'>{TAGLINE}</div> */}
            {user.bio && (
              <div tw='text-3xl pr-32'>
                {user.bio
                  .replace(
                    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                    ''
                  )
                  .trim()}
              </div>
            )}
            {/* <div tw='flex mb-2 mt-8'>
                👾{' '}
                {user.followers === 1
                  ? `${user.followers} follower`
                  : `${user.followers} followers`}{' '}
                · {`${user.following} following`}
              </div> */}
            <div tw='flex flex-wrap mt-8'>
              {/* {user.company && <div tw='flex mb-2 mr-4'>🏢 {user.company}</div>} */}
              {user.location && <div tw='flex mb-2 mr-4'>📍 {user.location}</div>}
              {/* {user.twitter_username && <div tw='flex mb-2'>🕊 @{user.twitter_username}</div>} */}
            </div>
          </div>
        </div>
      ),
      {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new errorResponse('Failed to generate an image.');
  }
}

function errorResponse(message) {
  return new ImageResponse(
    (
      <div tw='h-full w-full flex flex-col p-4 items-center justify-center'>
        <div tw='flex flex-col items-stretch rounded-xl shadow-2xl min-w-1/2'>
          <div tw='text-3xl bg-red-600 text-white px-4 py-2 rounded-t-xl'>Error</div>
          <div tw='text-xl border border-red-600 p-4 rounded-b-xl bg-white'>{message}</div>
        </div>
      </div>
    ),
    { width: IMAGE_WIDTH, height: IMAGE_HEIGHT }
  );
}
