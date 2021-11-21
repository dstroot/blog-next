import { socialLinks } from '../lib/socialLinks';

export const SocialLinks = () => {
  return (
    <>
      {socialLinks.map((s) => (
        <a
          href={s.link}
          rel='noreferrer'
          target='_blank'
          className={s.class}
          key={s.social}
          aria-label={s.aria}
        >
          <span className='sr-only'>{s.aria}</span>
          {s.icon}
        </a>
      ))}
    </>
  );
};
