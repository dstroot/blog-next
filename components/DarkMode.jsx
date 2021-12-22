import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const divStyle = {
    height: '22px',
    width: '130px',
  };

  // When mounted on client we can show the UI
  useEffect(() => setMounted(true), []);

  // if not mounted return a placeholder
  if (!mounted) return <div style={divStyle}> </div>;

  return (
    <div className='inline-flex rounded-full border border-blue-500 p-0.5 text-center tracking-tight text-xs'>
      <div
        className={
          'flex-1 rounded-full transition duration-100 hover:cursor-pointer px-2' +
          (theme === 'light'
            ? ' bg-blue-600  text-white'
            : ' text-blue-600 font-light')
        }
        onClick={() => setTheme('light')}
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
        onClick={() => setTheme('system')}
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
        onClick={() => setTheme('dark')}
      >
        Dark
      </div>
    </div>
  );
};
