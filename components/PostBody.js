import { GitHubLink } from './GitHubLink';

export const PostBody = ({ content, path }) => {
  return (
    <>
      <div className='max-w-3xl mx-auto'>
        <div
          className='prose prose-lg dark:prose-dark max-w-none break-words'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <GitHubLink path={path} />
    </>
  );
};
