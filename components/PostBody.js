import { GitHubLink } from './GitHubLink';
import { Sharable } from './Sharable';
// import { Provider, ClapButton } from '@lyket/react';

export const PostBody = ({ title, slug, html, path }) => {
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
          className='prose prose-lg dark:prose-invert prose-a:no-underline max-w-none break-words mb-6 
          prose-a:text-blue-500  hover:prose-a:text-blue-700
          dark:prose-a:text-blue-300  dark:hover:prose-a:text-blue-400'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Sharable slug={slug} title={title} />
      </div>
      <GitHubLink path={path} />
    </>
  );
};
