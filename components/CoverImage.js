import Link from "next/link";
import Image from "next/image";

export const CoverImage = ({ title, src, slug, height, width, priority }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
      priority={priority}
      // placeholder="blur"
      // blurDataURL={base64}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
