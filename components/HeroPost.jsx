import Link from 'next/link';
import Image from 'next/image';
// import Image from 'next/image';
import { Avatar } from './Avatar';
import { ReadMore } from './ReadMore';
import { MoreStats } from './MoreStats';
// import { imgixLoader } from '../lib/imgixLoader';

export const HeroPost = ({ title, coverImage, date, excerpt, author, slug, stats }) => {
  return (
    <section>
      <Link href={`/posts/${slug}`}>
        <a aria-label={title} className='group'>
          <div className='mb-8 md:mb-10'>
            {/*
            It usually is best practice to wrap images in a div and set height and width with it. HTML treats images as foreign objects so they don't follow the same rules as everything else. A simple div is the best way to work with an img as a normal block level element.
             */}
            <div className='relative aspect-[2/1]'>
              {/* New Image component */}
              <Image
                // loader={imgixLoader}
                src={coverImage}
                alt={`Hero image for ${title}`}
                // layout='raw' // intrinsic, fill, responsive, raw
                width={1496}
                height={748}
                // fill
                // sizes='(min-width: 640px) 460px,
                //        (min-width: 768px) 600px,
                //        (min-width: 1024px) 728px,
                //        1496px'
                priority={true}
                className='duration-300 ease-in-out group-hover:opacity-[85%]'
              />
            </div>
            <MoreStats stats={stats} slug={slug} />
          </div>
        </a>
      </Link>
      <div className='flex flex-col mb-12 md:flex-row gap-x-16 md:mb-16'>
        {/* Title and Avatar */}
        <div className='flex-none md:max-w-[45%]'>
          <h3 className='mb-4 text-3xl leading-tight md:text-4xl group-hover:underline'>
            <Link href={`/posts/${slug}`}>
              <a className='hover:underline'>{title}</a>
            </Link>
          </h3>
          <div className='mb-4 md:mb-0'>
            <Avatar name={author.name} picture={author.picture} size={65} date={date} />
          </div>
        </div>

        {/* Excerpt */}
        <div className='flex-1'>
          <p className='mb-4 text-lg leading-relaxed'>{excerpt}</p>
          <ReadMore slug={slug} />
        </div>
      </div>
    </section>
  );
};
