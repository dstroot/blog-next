import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
  const divStyle = {
    height: "30px",
    width: "30px",
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  // if theme is 'system' change it to the resolved theme
  useEffect(() => {
    if (theme === "system") {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme, theme, setTheme]);

  // if not mounted show a placeholder
  if (!mounted) return <div style={divStyle}> </div>;

  // When mounted on client, we can show the UI
  return (
    <div
      className="cursor-pointer block ml-auto mr-0"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? (
        <>
          <span className="sr-only">Light Mode</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="rotate(-180 200 200)" fillRule="evenodd" fill="none">
              <circle
                r="149"
                cy="200"
                cx="200"
                strokeWidth="50"
                stroke="#E2E2E2"
              />
              <path
                fill="#E2E2E2"
                d="M200 300c-55.228 0-100-44.772-100-100s44.772-100 100-100v200z"
              />
            </g>
          </svg>
        </>
      ) : (
        <>
          <span className="sr-only">Dark Mode</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                stroke="#131313"
                strokeWidth="50"
                cx="200"
                cy="200"
                r="149"
              />
              <path
                d="M200 100c55.228 0 100 44.772 100 100s-44.772 100-100 100z"
                fill="#131313"
              />
            </g>
          </svg>
        </>
      )}
    </div>
  );
};
