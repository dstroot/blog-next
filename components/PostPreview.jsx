import Link from 'next/link';
// import Image from 'next/image';
import Image from 'next/image';

import { cn } from '../lib/utils';
import { Avatar } from './Avatar';
import { ReadMore } from './ReadMore';
import { MoreStats } from './MoreStats';
// import { imgixLoader } from '../lib/imgixLoader';
import { useState, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  stats,
  onIsVisible,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          onIsVisible();
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    },
  });

  return (
    <div ref={ref}>
      <div className='mb-5'>
        <Link href={`/posts/${slug}`}>
          <div aria-label={title} className='sm:mx-0'>
            {/*
            It usually is best practice to wrap images in a div and set height and width with it. HTML treats images as foreign objects so they don't follow the same rules as everything else. A simple div is the best way to work with an img as a normal block level element.
             */}
            <div className='relative aspect-[2/1]'>
              {/* New Image component */}
              <Image
                // loader={imgixLoader}
                src={coverImage}
                alt={`Cover image for ${title}`}
                // layout='raw' // intrinsic, fill, responsive, raw
                // width={1496}
                // height={748}
                fill
                sizes='(min-width: 768px) 40vw, 100vw'
                className={cn(
                  'duration-300 ease-in-out hover:opacity-[85%]',
                  isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            {/* <Image
              // loader={imgixLoader}
              src={coverImage}
              alt={`Cover Image for ${title}`}
              // layout='responsive' // raw, responsive, fill
              width={708}
              height={354}
              className={cn(
                'duration-300 ease-in-out hover:opacity-[85%]',
                isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
              )}
              // className={cn(
              //   'hover:scale-[101%] opacity-1 duration-150 ease-in-out',
              //   isLoading ? 'grayscale opacity-0' : ''
              // )}
              onLoadingComplete={() => setIsLoading(false)}
            /> */}
            <MoreStats stats={stats} slug={slug} />
          </div>
        </Link>
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/posts/${slug}`}>
          <div className='hover:underline'>{title}</div>
        </Link>
      </h3>
      <div className='mb-4'>
        <Avatar name={author.name} picture={author.picture} size={50} date={date} />
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
      {isVisible && <ReadMore slug={slug} />}
    </div>
  );
};
