// import Image from 'next/image';
import Image from 'next/image';
import { Avatar } from './Avatar';
import { MoreStats } from './MoreStats';
import { PostTitle } from './PostTitle';
// import { imgixLoader } from '../lib/imgixLoader';

export const PostHeader = ({ title, coverImage, date, author, slug, stats }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='mb-8 md:mb-10 sm:mx-0'>
        {/* <Image
          // loader={imgixLoader}
          title={title}
          alt={`Hero image for ${title}`}
          src={coverImage}
          layout='raw' // intrinsic, fill, responsive, raw
          width={1496}
          height={748}
          priority={true}
        /> */}
        {/* <Image
          alt={`Hero image for ${title}`}
          src={coverImage}
          width={1496}
          height={748}
          priority={true}
        /> */}
        {/*
            It usually is best practice to wrap images in a div and set height and width with it. HTML treats images as foreign objects so they don't follow the same rules as everything else. A simple div is the best way to work with an img as a normal block level element.
             */}
        <div className='relative aspect-[2/1]'>
          <Image src={coverImage} alt={`Hero image for ${title}`} fill priority={true} />
        </div>
        <MoreStats stats={stats} slug={slug} />
      </div>
      <div className='max-w-3xl mx-auto'>
        <div className='mb-6'>
          <Avatar name={author.name} picture={author.picture} size={55} date={date} />
        </div>
      </div>
    </>
  );
};
