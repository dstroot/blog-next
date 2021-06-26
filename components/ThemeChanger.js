import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  // TODO: To avoid Content Layout Shift, consider rendering a
  // skeleton until mounted on the client side.
  if (!mounted) return null;

  return (
    <div
      className="text-right cursor-pointer"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme == "dark" ? (
        <Image
          src="/assets/blog/theme/ToggleInverse.svg"
          alt="light"
          height={30}
          width={30}
        />
      ) : (
        <Image
          src="/assets/blog/theme/Toggle.svg"
          alt="dark"
          height={30}
          width={30}
        />
      )}
    </div>
  );
};
