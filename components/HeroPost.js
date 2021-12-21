import Link from 'next/link';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { ReadMore } from './ReadMore';

export const HeroPost = ({ title, coverImage, date, excerpt, author, slug, stats }) => {
  return (
    <section>
      <div className='mb-8 md:mb-10'>
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
          priority={true}
          placeholder='empty'
          blurDataURL=''
        />
      </div>
      {/* Title and Avatar */}
      <div className='flex flex-col md:flex-row gap-x-16 mb-12 md:mb-16'>
        {/* Title and Avatar */}
        <div className='flex-none'>
          <h3 className='mb-4 text-3xl md:text-4xl leading-tight'>
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
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          <ReadMore slug={slug} stats={stats} />
        </div>
      </div>
    </section>
  );
};
