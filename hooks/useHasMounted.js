import { useState, useEffect } from "react";

/**

When dealing with a server-side rendered application (through
frameworks like Gatsby or Next, or any sort of SSR setup), it can
be useful to know whether you're rendering on the server or the client.

Usage:

const hasMounted = useHasMounted();

if (hasMounted) {
    // do stuff
}

*/

export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};
