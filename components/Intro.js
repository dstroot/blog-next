import { CMS_NAME, TAGLINE } from "../lib/constants";
import { ThemeChanger } from "./ThemeChanger";

export const Intro = () => {
  return (
    <section className="mb-8 md:mb-12">
      <div className="flex flex-col">
        <ThemeChanger />
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <p className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight">
            Blog.
          </p>
          <p className="mt-2 font-semibold italic text-xl md:text-2xl">
            {CMS_NAME}. {TAGLINE}.
          </p>
        </div>
      </div>
    </section>
  );
};
