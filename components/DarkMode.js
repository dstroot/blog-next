import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  const divStyle = {
    height: '30px',
    width: '30px',
  };

  // small pills inside border

  //   .text {
  //     box-sizing: border-box;
  //     display: inline-block;
  //     padding: 1px 6px;
  //     min-width: 42px;
  //     border: 1px solid transparent;
  //     border-radius: var(--toggle-border-radius-inner, 2px);
  //     text-align: center;
  //     color: var(--toggle-color-text);
  // }

  // When mounted on client we can show the UI
  useEffect(() => setMounted(true), []);

  // if theme is 'system' change it to the resolved theme
  // because tailwind needs body class to be "light" or "dark"
  useEffect(() => {
    if (mounted) {
      if (resolvedTheme === undefined && theme === undefined) {
        setTheme('light'); // light is default
      }
      if (theme === 'system') {
        setTheme(resolvedTheme);
      }
    }
  }, [resolvedTheme, theme, setTheme, mounted]);

  // if not mounted return a placeholder
  if (!mounted) return <div style={divStyle}> </div>;

  // When mounted on client show the UI
  return (
    <div className='flex flex-row justify-center rounded-full border border-blue-500 space-x-0.5 m-4'>
      <div className='flex-1 border text-center border-black bg-blue-600 hover:bg-blue-800 text-white  rounded-full items-center justify-center focus:outline-none transition duration-300 font-light text-sm'>
        Light
      </div>
      <div className='flex-1 border text-center border-black  text-blue-600  rounded-full items-center justify-center focus:outline-none transition duration-300 font-light text-sm'>
        Auto
      </div>
      <div className='flex-1 border text-center border-black text-blue-600  rounded-full items-center justify-center focus:outline-none transition duration-300 font-light text-sm'>
        Dark
      </div>
    </div>
  );
};
