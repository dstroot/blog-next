// truncate a string to a given length
export const truncateString = (str, n) => {
  if (str.length > n) {
    return str.substring(0, n) + '...';
  } else {
    return str;
  }
};

// get last segment of url string or path
export const getLastSegment = (path) => {
  path.substring(path.lastIndexOf('/') + 1);
};

// getLastSegment('/Users'); // "users"
// getLastSegment('/Users/Flavio'); // "Flavio"
// getLastSegment('/Users/Flavio/test.jpg'); // "test.jpg"
// getLastSegment('https://flavicopes.com/test'); // "test"

// string to base64
export const toBase64 = (str) => {
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
};

// used for shimmer effect while loading images
export const shimmer = (
  w,
  h
) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#a1a1a1" offset="20%" />
        <stop stop-color="#828282" offset="50%" />
        <stop stop-color="#a1a1a1" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="500ms" repeatCount="indefinite"  />
  </svg>`;
