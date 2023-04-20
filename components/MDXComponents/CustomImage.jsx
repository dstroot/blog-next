import { cn } from '../../lib/utils';
import { useState } from 'react';
import Image from 'next/image';

export const CustomImage = (props) => {
  let src = props.src;
  const isInternalImage = src && src.startsWith('/');
  const [isLoading, setLoading] = useState(true);

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}

      // https://www.peterlunch.com/snippets/next-image-styling
      <div className='relative'>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          {...props}
          loading='lazy'
          fill
          sizes='(max-width: 1280px) 90vw, 1496px'
          className={cn(
            'duration-300 ease-in-out group-hover:opacity-75',
            isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className='object-contain' src={props.src + '?w=768'} alt={props.alt} loading='lazy' />
  );
};
