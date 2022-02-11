import Image from 'next/image';
import { format } from 'date-fns';
import millify from 'millify';

/**
 * Supports plain text, images, and quote tweets.
 * Styles use !important to override Tailwind .prose inside MDX.
 * Inspiration: https://github.com/leerob/leerob.io/blob/main/lib/twitter.ts
 */

export const Tweet = ({ tweet }) => {
  const { text, id, author, media, created_at, public_metrics, referenced_tweets } = tweet;
  const createdAt = new Date(created_at);
  const image = author.profile_image_url.replace('_normal', '_200x200'); // higher res

  // construct our tweet URLs to use later
  const authorUrl = `https://twitter.com/${author.username}`;
  const likeUrl = `https://twitter.com/intent/like?tweet_id=${id}`;
  const retweetUrl = `https://twitter.com/intent/retweet?tweet_id=${id}`;
  const replyUrl = `https://twitter.com/intent/tweet?in_reply_to=${id}`;
  const tweetUrl = `https://twitter.com/${author.username}/status/${id}`;

  // make embedded URLs clickable
  const URLify = (string) => {
    const urls = string.match(/((((https?):\/\/)|(w{3}\.))[\-\w@:%_\+.~#?,&\/\/=]+)/g);

    if (urls) {
      urls.forEach(function (url) {
        string = string.replace(url, '<a target="_blank" href="' + url + '">' + url + '</a>');
      });
    }

    return string;
  };

  const urlified = URLify(text);

  // make hashtags blue
  const highlightHashTags = (string) => {
    const tags = string.match(/(#+[a-zA-Z0-9(_)]{1,})/g);

    if (tags) {
      tags.forEach(function (tag) {
        string = string.replace(
          tag,
          '<span class="text-blue-600 dark:text-blue-300">' + tag + '</span>'
        );
      });
    }

    return string;
  };

  const tagified = highlightHashTags(urlified);

  // make @names blue
  const highlightNames = (string) => {
    const names = string.match(/(@+[a-zA-Z0-9(_)]{1,})/g);

    if (names) {
      names.forEach(function (tag) {
        string = string.replace(
          tag,
          '<span class="text-blue-600 dark:text-blue-300">' + tag + '</span>'
        );
      });
    }

    return string;
  };

  const namified = highlightNames(tagified);

  const quoteTweet = referenced_tweets && referenced_tweets.find((t) => t.type === 'quoted');

  return (
    <div className='w-full p-4 my-4 border border-gray-300 border-1 rounded-xl tweet dark:border-gray-700'>
      <div className='flex'>
        <a className='flex w-12 h-12' href={authorUrl} target='_blank' rel='noopener noreferrer'>
          <Image
            alt={author.username}
            height={48}
            width={48}
            src={image}
            className='rounded-full'
          />
        </a>
        <a
          href={authorUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='author flex flex-col ml-2 !no-underline text-base'
        >
          <span
            className='flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5'
            title={author.name}
          >
            {author.name}
            {author.verified ? (
              <svg
                aria-label='Verified Account'
                className='inline w-5 h-5 ml-1 text-[#1d9bf0]'
                viewBox='0 0 24 24'
              >
                <g fill='currentColor'>
                  <path d='M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z' />
                </g>
              </svg>
            ) : null}
          </span>
          <span className='!text-gray-500' title={`@${author.username}`}>
            @{author.username}
          </span>
        </a>
        <a className='ml-auto' href={authorUrl} target='_blank' rel='noopener noreferrer'>
          <svg
            aria-label='Twitter Logo'
            className='w-6 h-6 text-[#1d9bf0]'
            viewBox='328 355 335 276'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='currentColor'>
              <path d='M630 425a195 195 0 0 1-299 175 142 142 0 0 0 97-30 70 70 0 0 1-58-47 70 70 0 0 0 31-2 70 70 0 0 1-57-66 70 70 0 0 0 28 5 70 70 0 0 1-18-90 195 195 0 0 0 141 72 67 67 0 0 1 116-62 117 117 0 0 0 43-17 65 65 0 0 1-31 38 117 117 0 0 0 39-11 65 65 0 0 1-32 35Z' />
            </g>
          </svg>
        </a>
      </div>
      <div
        className='mt-4 mb-1 text-xl whitespace-pre-wrap !text-gray-700 dark:!text-gray-300'
        dangerouslySetInnerHTML={{ __html: namified }}
      />
      {media && media.length ? (
        <div
          className={
            media.length === 1
              ? 'inline-grid grid-cols-1 gap-x-2 gap-y-2 my-2'
              : 'inline-grid grid-cols-2 gap-x-2 gap-y-2 my-2'
          }
        >
          {media.map((m) => (
            <Image
              key={m.media_key}
              alt={text}
              height={m.height}
              width={m.width}
              src={m.url}
              className='rounded'
            />
          ))}
        </div>
      ) : null}
      {quoteTweet ? <Tweet {...quoteTweet} /> : null}
      <a
        className='!text-gray-500 text-sm hover:!underline'
        href={tweetUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <time title={`Time Posted: ${createdAt.toUTCString()}`} dateTime={createdAt.toISOString()}>
          {format(createdAt, 'h:mm a - MMM d, y')}
        </time>
      </a>
      <hr className='!mt-2 !mb-2' />
      <div className='flex !text-gray-700 !text-sm dark:!text-gray-300 mt-2'>
        <a
          className='flex items-center mr-5 !text-gray-500 hover:!text-blue-600 transition hover:!underline'
          href={likeUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='20' height='20' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.813-1.148 2.353-2.73 4.644-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.375-7.454 13.11-10.037 13.156H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.035 11.596 8.55 11.658 1.52-.062 8.55-5.917 8.55-11.658 0-2.267-1.822-4.255-3.902-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.015-.03-1.426-2.965-3.955-2.965z'
            />
          </svg>
          <span>
            {millify(new Number(public_metrics.like_count), {
              precision: 1,
            })}
          </span>
        </a>
        <a
          className='flex items-center mr-5 !text-gray-500 hover:!text-blue-600 transition hover:!underline'
          href={replyUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='20' height='20' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.045.286.12.403.143.225.385.347.633.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.368-3.43-7.788-7.8-7.79zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.334-.75-.75-.75h-.395c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z'
            />
          </svg>
          <span>
            {millify(new Number(public_metrics.reply_count), {
              precision: 1,
            })}
          </span>
        </a>
        <a
          className='flex items-center mr-5 !text-gray-500 hover:!text-blue-600 transition hover:!underline'
          href={retweetUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='20' height='20' viewBox='0 0 24 24'>
            <path
              className='fill-current'
              d='M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z'
            />
          </svg>
          <span>
            {millify(new Number(public_metrics.retweet_count), {
              precision: 1,
            })}
          </span>
        </a>
        <a
          className='flex items-center mr-5 !text-gray-500 hover:!text-blue-600 transition hover:!underline'
          href={tweetUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg className='mr-2' width='20' height='20' viewBox='0 0 24 24'>
            <g className='fill-current'>
              <path d='M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z'></path>
              <path d='M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z'></path>
            </g>
          </svg>
          <span>Copy Link</span>
        </a>
      </div>
      <a className='' href={tweetUrl} target='_blank' rel='noopener noreferrer'>
        <button className='w-full mt-3 text-sm text-[#1d9bf0] font-bold p-1 border rounded-full hover:bg-blue-50 hover:no-underline border-gray-300 dark:border-gray-700 hover:dark:bg-gray-700'>
          Read{' '}
          {millify(new Number(public_metrics.reply_count), {
            precision: 1,
          })}{' '}
          replies
        </button>
      </a>
    </div>
  );
};
