import Link from 'next/link';
import Image from 'next/image';
// import { useState } from 'react';
// import { cn } from '../lib/utils';

export const CoverImage = ({
  title,
  src,
  slug,
  height,
  width,
  priority,
  placeholder,
  blurDataURL,
}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout='responsive' // intrinsic, fill, responsive
      width={width}
      height={height}
      priority={priority ? priority : false}
      // sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
      placeholder={placeholder ? placeholder : 'empty'}
      blurDataURL={blurDataURL ? blurDataURL : ''}
      className='duration-500 ease-in-out group-hover:opacity-75'
    />
  );

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title} className='group'>
            {image}
          </a>
        </Link>
      ) : (
        image
      )}
    </div>
    // <BlurImage src={src} slug={slug} title={title} width={width} height={height} />
  );
};

// function BlurImage({ src, slug, title, width, height }) {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
//       <a aria-label={title} className='group'>
//         <div className=''>
//           <Image
//             src={src}
//             alt={`Cover Image for ${title}`}
//             layout='responsive' // intrinsic, fill, responsive
//             width={width}
//             height={height}
//             // objectFit='cover'
//             className={cn(
//               'group-hover:opacity-75 duration-500 ease-in-out',
//               isLoading ? 'grayscale, blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
//             )}
//             onLoadingComplete={() => setIsLoading(false)}
//           />
//         </div>
//       </a>
//     </Link>
//   );
// }

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
