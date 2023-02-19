import Link from 'next/link';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

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
            <div className='relative aspect-[2/1]'>
              {/*
                It usually is best practice to wrap images in a div and set height and width with it. 
                HTML treats images as foreign objects so they don't follow the same rules as everything else. 
                A simple div is the best way to work with an img as a normal block level element. Then set "fill"
                on the Next Image componenet.
              */}
              <Image
                // loader={imgixLoader}
                src={coverImage}
                alt={`Cover image for ${title}`}
                fill
                sizes='(max-width: 768px) 90vw, 45vw'
                className={cn(
                  'duration-150 ease-in-out hover:opacity-[85%] object-cover overflow-hidden',
                  isLoading ? 'scale-105 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
            <MoreStats stats={stats} slug={slug} />
          </div>
        </Link>
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/posts/${slug}`} className='hover:underline'>
          <Balancer>{title}</Balancer>
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
