import {
  FaFacebookF,
  FaGithub,
  // FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

export const socialLinks = [
  // {
  //   social: 'Facebook',
  //   link: 'https://www.facebook.com/dan.stroot/',
  //   icon: <FaFacebookF />,
  //   aria: 'Join me on on Facebook.',
  // },
  {
    social: 'Twitter',
    link: 'https://twitter.com/danstroot',
    icon: <FaTwitter />,
    aria: 'Join me on Twitter.',
    class: 'hover:text-gray-500',
  },
  {
    social: 'LinkedIn',
    link: 'https://www.linkedin.com/in/danstroot',
    icon: <FaLinkedin />,
    aria: 'Join me on LinkedIn.',
    class: 'hover:text-gray-500',
  },
  {
    social: 'Github',
    link: 'https://github.com/dstroot/blog-next',
    icon: <FaGithub />,
    aria: 'Join me on GitHub.',
    class: 'hover:text-gray-500',
  },
  // {
  //   social: 'Instagram',
  //   link: 'https://instagram.com',
  //   icon: <FaInstagram />,
  //   aria: 'Join me on Instagram.',
  // },
];
