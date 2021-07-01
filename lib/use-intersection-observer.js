import { useEffect } from "react";

/**
The Intersection Observer API allows you to configure a callback that is called whenever one element, called the target, intersects either the device viewport or a specified element; for the purpose of this API, this is called the root element or root. 

rootMargin: Margin around the root. Serves to grow or shrink each side of the root element's bounding box before computing intersections. 

threshold: at what percentage of the target's visibility the observer's callback should be executed
 */

const useIntersectionObserver = ({
  target,
  onIntersect, // callback
  threshold = 0.2, // when 20% visible
  rootMargin = "0px", // don't adjust viewport margin
}) => {
  useEffect(() => {
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    });

    // Once you have created the observer, you need to give it a target element to watch
    const current = target.current;
    observer.observe(current);

    // clean up our observer
    return () => {
      observer.unobserve(current);
    };
  });
};

export default useIntersectionObserver;
