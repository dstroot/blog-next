import Link from "next/link";

export const ReadMore = ({ slug }) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="hover:underline text-2xl leading-snug">
        Read More{" "}
        <svg
          className="h-6 w-6 inline-block -mt-1"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 16 16"
          role="img"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>
      </a>
    </Link>
  );
};
