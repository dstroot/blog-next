export const CodeBlock = ({ children }) => {
  return (
    <div className='flex overflow-hidden relative flex-col p-5 mx-auto my-5 space-y-5 w-full font-mono text-sm rounded-lg bg-gray-700'>
      <div className='flex space-x-2 w-full'>
        <span className='w-3 h-3 rounded-full mac-cls'></span>
        <span className='w-3 h-3 rounded-full mac-min'></span>
        <span className='w-3 h-3 rounded-full mac-max'></span>
      </div>
      <div>{children}</div>
    </div>
  );
};

// https://ped.ro/blog/code-blocks-but-better
// https://github.com/wooorm/xdm#syntax-highlighting-with-the-meta-field
// https://www.alaycock.co.uk/