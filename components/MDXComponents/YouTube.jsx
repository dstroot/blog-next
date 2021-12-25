export const YouTube = ({ link }) => {
  const url = new URL(link);
  return (
    <iframe
      className='w-full aspect-video'
      src={'https://www.youtube-nocookie.com/embed/' + url.pathname}
      frameBorder='0'
      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>
  );
};
