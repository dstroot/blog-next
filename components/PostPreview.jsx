import Link from 'next/link';
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
          <a aria-label={title} className='sm:mx-0'>
            <Image
              // loader={imgixLoader}
              src={coverImage}
              alt={`Cover Image for ${title}`}
              layout='raw' // raw, responsive, fill
              width={708}
              height={354}
              // className={cn(
              //   'hover:scale-[101%] duration-300 ease-in-out',
              //   isLoading ? 'grayscale blur-lg' : ''
              // )}
              className={cn(
                'hover:scale-[101%] opacity-1 duration-150 ease-in-out',
                isLoading ? 'grayscale opacity-0' : ''
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
            <MoreStats stats={stats} slug={slug} />
          </a>
        </Link>
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/posts/${slug}`}>
          <a className='hover:underline'>{title}</a>
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
