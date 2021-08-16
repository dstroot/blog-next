import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [selected, setSelected] = useState('auto');

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
  // <div className={"w-full flex-grow lg:flex lg:items-center lg:w-auto " + (selected ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'text-blue-600')}></div>
  // flex flex-row justify-center
  return (
    <div className='flex flex-row justify-center rounded-full border border-blue-500 m-4'>
      <div
        className={
          'flex-1 outline-none text-center rounded-full transition duration-200 text-sm hover:cursor-pointer' +
          (selected === 'light'
            ? ' bg-blue-600  text-white font-medium'
            : ' text-blue-600 font-light')
        }
        onClick={() => setSelected('light')}
      >
        Light
      </div>
      <div
        className={
          'flex-1 border border-transparent text-center rounded-full transition duration-200 text-sm hover:cursor-pointer' +
          (selected === 'auto'
            ? ' bg-blue-600  text-white font-medium'
            : ' text-blue-600 font-light')
        }
        onClick={() => setSelected('auto')}
      >
        Auto
      </div>
      <div
        className={
          'flex-1 border border-transparent text-center rounded-full transition duration-200 text-sm hover:cursor-pointer' +
          (selected === 'dark'
            ? ' bg-blue-600  text-white font-medium'
            : ' text-blue-600 font-light')
        }
        onClick={() => setSelected('dark')}
      >
        Dark
      </div>
    </div>
  );
};
