import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// When dealing with a server-side rendered application (through
// frameworks like Gatsby or Next, or any sort of SSR setup), it can
// be useful to know whether you're rendering on the server or the client.
function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export const ThemeChanger = () => {
  const hasMounted = useHasMounted();
  const { theme, setTheme } = useTheme();
  const divStyle = {
    height: "30px",
    width: "30px",
  };

  if (!hasMounted) {
    // To avoid Content Layout Shift rendering a
    // skeleton div until mounted on the client side.
    return <div style={divStyle}> </div>;
  }

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
