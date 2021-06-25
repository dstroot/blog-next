import { CMS_NAME, TAGLINE } from "../lib/constants";
import { ThemeChanger } from "./ThemeChanger";

export default function Intro() {
  return (
    <>
      <div className="mt-4">
        <ThemeChanger />
      </div>
      <section className="flex-col md:flex-row flex items-center md:justify-between md:mt-10 mb-10 md:mb-12">
        <p className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </p>
        <p className="text-center md:text-left mt-1 md:pl-8 text-xl">
          {CMS_NAME}. {TAGLINE}.
        </p>
      </section>
    </>
  );
}
