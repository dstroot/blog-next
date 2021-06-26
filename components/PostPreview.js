import Link from "next/link";
import { Avatar } from "./Avatar2";
import { CoverImage } from "./CoverImage";
import { ReadMore } from "./ReadMore";

export const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  stats,
}) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Avatar
          name={author.name}
          picture={author.picture}
          size={55}
          date={date}
        />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <ReadMore slug={slug} stats={stats} />
    </div>
  );
};
