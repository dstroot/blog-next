import { useState, useRef } from 'react';
import Link from 'next/link';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
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
  // fileName,
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
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
          priority={false}
          // placeholder="blur"
          // blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk4AcAABUAET9MVpIAAAAASUVORK5CYII="
        />
      </div>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <div className='mb-4'>
        <Avatar
          name={author.name}
          picture={author.picture}
          size={50}
          date={date}
        />
      </div>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      {isVisible && <ReadMore slug={slug} stats={stats} />}
    </div>
  );
};
