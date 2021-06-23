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
              {/* <p className="text-lime-600 dark:text-lime-400 text-sm sm:text-base lg:text-sm xl:text-base font-semibold uppercase">
              <abbr title="Episode">Ep.</abbr> 128
            </p> */}
              <h2 className="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold mb-0">
                Dan Stroot
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                <DateFormatter dateString={date} /> · {time}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
