import { CMS_NAME, TAGLINE } from "../lib/constants";
import { ThemeChanger } from "./ThemeChanger";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <p className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </p>
      <p className="text-center md:text-left mt-5 md:pl-8 text-xl">
        <ThemeChanger />
        {CMS_NAME}. {TAGLINE}.
      </p>
    </section>
  );
}
