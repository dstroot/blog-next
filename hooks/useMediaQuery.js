import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Returns a MediaQueryList object
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    // clean up
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};
