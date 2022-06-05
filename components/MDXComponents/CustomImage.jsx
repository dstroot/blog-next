import { cn } from '../../lib/utils';
import { useState } from 'react';
import Image from 'next/image';

export const CustomImage = (props) => {
  const src = props.src;
  const isInternalImage = src && src.startsWith('/');
  const [isLoading, setLoading] = useState(true);

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}
      // https://www.peterlunch.com/snippets/next-image-styling
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        {...props}
        layout='responsive'
        loading='lazy'
        className={cn(
          'duration-500 ease-in-out group-hover:opacity-75',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
};
