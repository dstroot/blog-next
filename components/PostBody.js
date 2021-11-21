import { GitHubLink } from './GitHubLink';
import { Sharable } from './Sharable';
// import { Provider, ClapButton } from '@lyket/react';

export const PostBody = ({ title, slug, content, path }) => {
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
          className='prose prose-lg dark:prose-dark max-w-none break-words mb-6'
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Sharable slug={slug} title={title} />
      </div>
      <GitHubLink path={path} />
    </>
  );
};
