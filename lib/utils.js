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
