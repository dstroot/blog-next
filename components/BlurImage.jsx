import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { useState } from 'react';

export function BlurImage({ src, slug, title, width, height }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
      <a aria-label={title} className='sm:mx-0'>
        {/* <div className='sm:mx-0'> */}
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          layout='raw' // raw, responsive, fill
          width={width}
          height={height}
          className={cn(
            'hover:scale-[102%] duration-300 ease-in-out',
            isLoading ? 'grayscale, blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
        {/* </div> */}
      </a>
    </Link>
  );
}

// https://www.youtube.com/watch?v=BSoRXk1FIw8

/*
The layout behavior of the image as the viewport changes size. Defaults to intrinsic.

When fixed, the image dimensions will not change as the viewport changes (no responsiveness) similar to the native img element.

When intrinsic, the image will scale the dimensions down for smaller viewports but maintain the original dimensions for larger viewports.

When responsive, the image will scale the dimensions down for smaller viewports and scale up for larger viewports.

When fill, the image will stretch both width and height to the dimensions of the parent element, provided the parent element is relative. This is usually paired with the objectFit property.

A placeholder to use while the image is loading, possible values are blur or empty. Defaults to empty.

When blur, the blurDataURL property will be used as the placeholder. If src is an object from a static import and the imported image is jpg, png, or webp, then blurDataURL will automatically be populated.

For dynamic images, you must provide the blurDataURL property. Solutions such as Plaiceholder can help with base64 generation.

 */
