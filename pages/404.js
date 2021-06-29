import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen">
      <div className="m-8 md:m-16">
        <Link href="/">
          <a className="text-2xl md:text-4xl hover:underline">{"< Home."}</a>
        </Link>
      </div>
      <div className="mt-20 flex flex-col md:flex-row justify-center items-center">
        <div className="text-8xl font-bold tracking-tighter leading-tight border-b-4 md:border-r-4 md:border-b-0 pb-3 md:pr-6">
          404
        </div>
        <div className="font-semibold italic text-xl md:text-2xl pt-3 md:pl-6">
          This page could not be found.
        </div>
      </div>
    </div>
  );
}
