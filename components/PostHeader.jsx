import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { PostTitle } from './PostTitle';

export const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='mb-8 md:mb-10 sm:mx-0'>
        <CoverImage
          title={title}
          src={coverImage}
          width={1496}
          height={748}
          priority={true}
          placeholder='blur' // empty | blur
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII='
        />
      </div>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-6'>
          <Avatar name={author.name} picture={author.picture} size={55} date={date} />
        </div>
      </div>
    </>
  );
};
