import { CMS_NAME } from '../lib/constants'
import {useTheme} from 'next-themes'
import Image from 'next/image'

export default function Intro() {
  const {theme, setTheme} = useTheme()
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <div className="text-right" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        { theme == 'dark' ? 
          <Image src="/assets/blog/theme/ToggleInverse.svg" alt="light" height={30} width={30} className="cursor-pointer"/> 
          : 
          <Image src="/assets/blog/theme/Toggle.svg" alt="dark" height={30} width={30} className="cursor-pointer"/> 
        }
        </div>
        {CMS_NAME}.
      </h4>
    </section>
  )
}
