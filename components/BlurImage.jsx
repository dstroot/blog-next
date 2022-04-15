import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../lib/utils';

export function BlurImage({ src, slug, title, width, height }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
      <a aria-label={title} className='group'>
        <div className=''>
          <Image
            src={src}
            alt={`Cover Image for ${title}`}
            layout='responsive' // intrinsic, fill, responsive
            width={width}
            height={height}
            // objectFit='cover'
            className={cn(
              'group-hover:opacity-75 duration-500 ease-in-out',
              isLoading ? 'grayscale, blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>
      </a>
    </Link>
  );
}
