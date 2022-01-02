export const truncateString = (str, n) => {
  if (str.length > n) {
    return str.substring(0, n) + '...';
  } else {
    return str;
  }
};

export const getLastSegment = (path) => {
  path.substring(path.lastIndexOf('/') + 1);
};

// getLastSegment('/Users'); // "users"
// getLastSegment('/Users/Flavio'); // "Flavio"
// getLastSegment('/Users/Flavio/test.jpg'); // "test.jpg"
// getLastSegment('https://flavicopes.com/test'); // "test"

export const toBase64 = (str) => {
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);
};
