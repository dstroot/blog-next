import { useEffect } from 'react';

export const usePageView = ({ slug }) => {
  // Note: StrictMode renders components twice (dev, not production) in order to
  // detect problems with your code. If you are running in dev and seeing this trigger
  // twice that could be the reason.
  useEffect(() => {
    setTimeout(() => {
      // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
      (navigator.sendBeacon && navigator.sendBeacon(`/api/views/${encodeURIComponent(slug)}`)) ||
        fetch(`/api/views/${encodeURIComponent(slug)}`, { method: 'POST' });
    }, 5000); // register page view after 5s
  }, [slug]);
};
