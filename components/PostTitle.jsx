// https://vercel.com/blog/react-wrap-balancer
import Balancer from 'react-wrap-balancer';

export const PostTitle = ({ children }) => {
  return (
    <h1 className='mb-12 text-4xl font-bold leading-tight tracking-tighter text-center md:text-6xl lg:text-7xl md:leading-none md:text-left'>
      <Balancer>{children}</Balancer>
    </h1>
  );
};
