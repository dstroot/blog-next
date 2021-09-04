import { GitHubLink } from './GitHubLink';
// import { Provider, ClapButton } from '@lyket/react';

export const PostBody = ({ content, path }) => {
  // const lyketKey = ''; // process.env.NEXT_PUBLIC_LYKET_ACCESS_KEY;

  return (
    <>
      {/* <div className='sticky top-16 ml-44 inline-block'>
        <Provider apiKey={lyketKey}>
          <ClapButton
            namespace='post.slug'
            id='post'
            component={ClapButton.templates.Medium}
          />
        </Provider>
      </div> */}
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
