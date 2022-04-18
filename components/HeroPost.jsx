import Link from 'next/link';
import Image from 'next/image';
import { Avatar } from './Avatar';
// import { CoverImage } from './CoverImage';
import { ReadMore } from './ReadMore';

export const HeroPost = ({ title, coverImage, date, excerpt, author, slug, stats }) => {
  return (
    <section>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <a aria-label={title} className='group'>
          <div className='mb-8 md:mb-10'>
            <Image
              src={coverImage}
              alt={`Hero image for ${title}`}
              layout='responsive' // intrinsic, fill, responsive
              width={1496}
              height={748}
              priority={true}
              className='duration-300 ease-in-out group-hover:scale-105'
              // placeholder='blur'
              // blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkSAMAAGwAaKJgE8oAAAAASUVORK5CYII=`}
            />
          </div>
        </a>
      </Link>
      <div className='flex flex-col mb-12 md:flex-row gap-x-16 md:mb-16'>
        {/* Title and Avatar */}
        <div className='flex-none max-w-[50%]'>
          <h3 className='mb-4 text-3xl leading-tight md:text-4xl group-hover:underline'>
            <Link as={`/posts/${slug}`} href='/posts/[slug]'>
              <a className='hover:underline'>{title}</a>
            </Link>
            {/* <p>views: {views}</p> */}
          </h3>
          <div className='mb-4 md:mb-0'>
            <Avatar name={author.name} picture={author.picture} size={65} date={date} />
          </div>
        </div>

        {/* Excerpt */}
        <div className='flex-1'>
          <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
          <ReadMore slug={slug} stats={stats} />
        </div>
      </div>
    </section>
  );
};
