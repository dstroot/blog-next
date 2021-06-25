import Link from "next/link";

// export const ReadMore = ({ slug, stats }) => {
//   return (
//     <Link as={`/posts/${slug}`} href="/posts/[slug]">
//       <a className="hover:underline text-xl md:text-2xl leading-snug">
//         Read More {stats.text}
//         <svg
//           className="h-6 w-6 inline-block -mt-1"
//           aria-hidden="true"
//           fill="currentColor"
//           viewBox="0 0 16 16"
//           role="img"
//         >
//           <path
//             fillRule="evenodd"
//             d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
//           />
//         </svg>
//       </a>
//     </Link>
//   );
// };

export const ReadMore = ({ slug, stats }) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a>
        <div className="space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
            <div className="flex-initial">
              <p className="text-black dark:text-white font-semibolds mb-0 hover:underline">
                Read More
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {stats.text}
              </p>
            </div>
            <svg
              className="h-8 w-8 flex-initial justify-self-start"
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
            <div className="flex-grow"></div>
          </div>
        </div>
      </a>
    </Link>
  );
};
