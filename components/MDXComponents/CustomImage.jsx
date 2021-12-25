import Image from 'next/image';

export const CustomImage = (props) => {
  const src = props.src;
  const isInternalImage = src && src.startsWith('/');

  if (isInternalImage) {
    return (
      // height and width are part of the props, from rehype-img-size
      // so they are automatically passed here with {...props}
      // https://www.peterlunch.com/snippets/next-image-styling
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image {...props} layout='responsive' loading='lazy' />
    );
  }

  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  return <img {...props} />;
};
