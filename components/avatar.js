import Image from "next/image";
import Link from "next/link";

export default function Avatar({ name, picture, size }) {
  return (
    <Link href="/about">
      <a>
        <div className="flex flex-row items-center">
          <div className="flex-initial">
            <Image
              src={picture}
              alt={name}
              width={size}
              height={size}
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-initial ml-4 mb-2 text-xl font-bold">{name}</div>
        </div>
      </a>
    </Link>
  );
}
