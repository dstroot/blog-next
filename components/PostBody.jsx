import { useMemo } from 'react';
import { GitHubLink } from './GitHubLink';
import { Sharable } from './Sharable';
import { MDXComponent } from './MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';

export const PostBody = ({ title, slug, code, path }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className='max-w-3xl mx-auto'>
        <div className='converted-html'>
          <Component components={{ ...MDXComponent }} />
        </div>
        <Sharable slug={slug} title={title} />
      </div>
      <GitHubLink path={path} />
    </>
  );
};
