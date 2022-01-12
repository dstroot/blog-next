import { useEffect } from 'react';

export const usePageView = ({ slug }) => {
  // Note: StrictMode renders components twice (dev, not production) in order to
  // detect problems with your code. If you are running in dev and seeing this trigger
  // twice that could be the reason.

  if (typeof slug === 'undefined') {
    console.log('usePageView: slug undefined');
  }

  if (typeof encodeURIComponent(slug) === 'undefined') {
    console.log('usePageView: encodeURIComponent(slug) undefined');
  }

  useEffect(() => {
    setTimeout(() => {
      let path = encodeURIComponent(slug);
      // Use `navigator.sendBeacon()` if available, fall back to `fetch()`.
      (navigator.sendBeacon && navigator.sendBeacon(`/api/views/${path}`)) ||
        fetch(`/api/views/${path}`, { method: 'POST' });
    }, 5000); // register page view after 5s
  }, [slug]);
};
