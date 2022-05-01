import { CMS_NAME, TAGLINE } from '../lib/constants';
import { ThemeChanger } from './ThemeChanger';

export const Intro = () => {
  return (
    <section className='mb-8 md:mb-12'>
      <div className='flex flex-col'>
        <ThemeChanger />
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <p className='text-6xl font-bold leading-tight tracking-tighter md:text-7xl'>
            {/* Blog */}
            {CMS_NAME + ' · Blog'}
          </p>
          <p className='mt-2 text-xl italic font-semibold md:text-2xl'>{TAGLINE}.</p>
        </div>
      </div>
    </section>
  );
};
