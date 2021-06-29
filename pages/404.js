import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="min-h-screen">
        <div className="m-16">
          <Link href="/">
            <a className="text-4xl hover:underline">{"< Home."}</a>
          </Link>
        </div>
        <div className="mt-20 flex flow-col justify-center items-center">
          <div className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight border-r-4 pr-6">
            404
          </div>
          <div className="font-semibold italic text-xl md:text-2xl pl-6">
            This page could not be found.
          </div>
        </div>
      </div>
    </>
  );
}
