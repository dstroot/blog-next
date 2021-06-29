import Link from "next/link";
import { Avatar } from "./Avatar";
import { CoverImage } from "./CoverImage";
import { ReadMore } from "./ReadMore";

export const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  stats,
}) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
          priority={true}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0">
            <Avatar
              name={author.name}
              picture={author.picture}
              size={75}
              date={date}
            />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <ReadMore slug={slug} stats={stats} />
        </div>
      </div>
    </section>
  );
};
