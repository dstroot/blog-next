import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [selected, setSelected] = useState('auto');

  const divStyle = {
    height: '15px',
    width: '30px',
  };

  // When mounted on client we can show the UI
  useEffect(() => setMounted(true), []);

  // if theme is 'system' change it to the resolved theme
  // because tailwind needs body class to be "light" or "dark"
  // useEffect(() => {
  //   if (mounted) {
  //     if (resolvedTheme === undefined && theme === undefined) {
  //       setTheme('light'); // light is default
  //     }
  //     if (theme === 'system') {
  //       setTheme(resolvedTheme);
  //     }
  //   }
  // }, [resolvedTheme, theme, setTheme, mounted]);

  // if not mounted return a placeholder
  if (!mounted) return <div style={divStyle}> </div>;

  // When mounted on client show the UI
  // <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (selected ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'text-blue-600')}></div>
  // flex flex-row justify-center
  return (
    <div className='inline-flex rounded-full border border-blue-500 p-0.5 text-center tracking-tight text-xs m-2'>
      <div
        className={
          'flex-1 rounded-full transition duration-100 hover:cursor-pointer px-2' +
          (theme === 'light'
            ? ' bg-blue-600  text-white'
            : ' text-blue-600 font-light')
        }
        onClick={() => {
          setSelected('light');
          setTheme('light');
        }}
      >
        Light
      </div>
      <div
        className={
          'flex-1 rounded-full transition duration-100 hover:cursor-pointer px-2' +
          (theme === 'system'
            ? ' bg-blue-600  text-white'
            : ' text-blue-600 font-light')
        }
        onClick={() => {
          setSelected('system');
          setTheme('system');
        }}
      >
        Auto
      </div>
      <div
        className={
          'flex-1 rounded-full transition duration-100 hover:cursor-pointer px-2' +
          (theme === 'dark'
            ? ' bg-blue-600  text-white'
            : ' text-blue-600 font-light')
        }
        onClick={() => {
          setSelected('dark');
          setTheme('dark');
        }}
      >
        Dark
      </div>
    </div>
  );
};
