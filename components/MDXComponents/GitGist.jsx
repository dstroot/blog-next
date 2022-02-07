import { useState, useEffect } from 'react';
import Prism from 'prismjs';

export const GitGist = ({ url }) => {
  let [gist, setGist] = useState(null);
  const getName = (url) => url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    fetch(url)
      .then((response) => response.text())
      .then((text) => setGist(Prism.highlight(text, Prism.languages.javascript, 'javascript')));
  }, [url]);

  return (
    <>
      <div className='rehype-code-title'>{getName(url)}</div>
      <pre className='language-javascript'>
        <code
          className='code-highlight language-javascript'
          dangerouslySetInnerHTML={{
            __html: gist,
          }}
        />
      </pre>
    </>
  );
};
