import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./date-formatter";

export default function Avatar({ name, picture, size, date, time }) {
  return (
    <Link href="/about">
      <a>
        <div className="bg-white dark:bg-gray-800 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
            <Image
              src={picture}
              alt={name}
              width={size}
              height={size}
              className="flex-none w-16 h-16 rounded-full bg-gray-100"
            />
            <div className="min-w-0 flex-auto">
              <p className="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold mb-0 hover:underline">
                Dan Stroot
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <DateFormatter dateString={date} /> · {time}
              </p>
            </div>
            {/* <div className="min-w-0 flex-grow">test</div> */}
          </div>
        </div>
      </a>
    </Link>
  );
}
