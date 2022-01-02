import Link from 'next/link';
import Image from 'next/image';
// import { toBase64 } from '../lib/utils';
// import useDimensions from 'react-cool-dimensions';

// const shimmer = (
//   w,
//   h
// ) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <defs>
//       <linearGradient id="g">
//         <stop stop-color="#a1a1a1" offset="20%" />
//         <stop stop-color="#828282" offset="50%" />
//         <stop stop-color="#a1a1a1" offset="70%" />
//       </linearGradient>
//     </defs>
//     <rect width="${w}" height="${h}" fill="#333" />
//     <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//     <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="500ms" repeatCount="indefinite"  />
//   </svg>`;

export const CoverImage = ({
  title,
  src,
  slug,
  height,
  width,
  priority,
  // placeholder,
  // blurDataURL,
}) => {
  // const { observe, width } = useDimensions();
  const image = (
    // <div ref={observe}>
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout='responsive' // intrinsic, fill, responsive
      width={width}
      height={height}
      priority={priority ? priority : false}
      // sizes={width !== undefined ? `${Math.round(width)}px` : '100vw'}
      // placeholder={placeholder ? placeholder : 'empty'}
      // blurDataURL={blurDataURL ? blurDataURL : ''}
      // placeholder='blur'
      // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(width, width / 2))}`}
    />
    // </div>
  );
  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

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
