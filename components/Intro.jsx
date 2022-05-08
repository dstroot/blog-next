import { CMS_NAME, TAGLINE } from '../lib/constants';
import { ThemeChanger } from './ThemeChanger';

export const Intro = () => {
  return (
    <section className='mb-8 md:mb-12'>
      <div className='flex flex-col'>
        <ThemeChanger />
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <p className='text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl'>
            {CMS_NAME + ' · Blog'}
          </p>
          <p className='mt-2 text-2xl italic font-semibold md:text-2xl lg:text-3xl'>{TAGLINE}.</p>
        </div>
      </div>
    </section>
  );
};
