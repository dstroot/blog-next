import { useMemo } from 'react';
import { GitHubLink } from './GitHubLink';
import { Sharable } from './Sharable';
import { MDXComponents } from './MDXComponents';
import { getMDXComponent } from 'mdx-bundler/client';
// import { Suggested } from './Suggested';

export const PostBody = ({ title, slug, code, path }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className='max-w-3xl mx-auto'>
        <div className='converted-html'>
          <Component components={{ ...MDXComponents }} />
          {/* <Suggested /> */}
        </div>
        <Sharable slug={slug} title={title} />
      </div>
      <GitHubLink path={path} />
    </>
  );
};
