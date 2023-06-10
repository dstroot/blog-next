import { IoLogoJavascript, IoLogoReact, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io5';
import { VscTerminalBash } from 'react-icons/vsc';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
// import { BiLogoTypescript } from 'react-icons/bi';
import { BsMarkdownFill } from 'react-icons/bs';
import { CgTimelapse, CgFramer } from 'react-icons/cg';

export const icons = {
  opgp: <GiEarthAfricaEurope />,
  ga: <SiGoogleanalytics />,
  gtm: <SiGoogletagmanager />,
  mdx: <BsMarkdownFill />,
  timeout: <CgTimelapse />,
  fm: <CgFramer />,
  tailwind: <SiTailwindcss />,
  js: <IoLogoJavascript />,
  ts: <SiTypescript />,
  // ts: <BiLogoTypescript />,
  react: <IoLogoReact />,
  html: <IoLogoHtml5 />,
  css: <IoLogoCss3 />,
  bash: <VscTerminalBash />,
  next: <SiNextdotjs />,
};
