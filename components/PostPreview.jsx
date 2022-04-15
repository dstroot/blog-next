import { useState, useRef } from 'react';
import Link from 'next/link';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { BlurImage } from './BlurImage';
import { ReadMore } from './ReadMore';
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
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

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
        {/* <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          width={708}
          height={354}
          placeholder='blur'
          // blurDataURL={coverImage}
          blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkSAMAAGwAaKJgE8oAAAAASUVORK5CYII=`}
        /> */}
        <BlurImage src={coverImage} slug={slug} title={title} width={708} height={354} />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='mb-4'>
        <Avatar name={author.name} picture={author.picture} size={50} date={date} />
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
      {isVisible && <ReadMore slug={slug} stats={stats} />}
    </div>
  );
};
