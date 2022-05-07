import { useEffect, useState } from 'react';
import { PostPreview } from './PostPreview';

export const MoreStories = ({ posts }) => {
  const [page, setPage] = useState(1);
  const [endList, setEndList] = useState(false);
  const [postList, setPostList] = useState([]);

  const length = posts.length - 1;
  const chunkSize = 6;

  // This is our "infinite scroll".  If the visible post is the next
  // to last post, then increment the page, which loads another chunk
  const onIsVisible = (index) => {
    if (index === postList.length - 1 && !endList) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    const fetchPosts = (page) => {
      let start = page * chunkSize - chunkSize;
      let end = page * chunkSize;

      // end of list handling
      if (end > length) {
        end = length;
        setEndList(true);
      }

      // get another slice of posts and append them
      const morePosts = posts.slice(start, end);
      setPostList((postList) => {
        return postList.concat(morePosts); // notice concatination for infinite scroll
      });
    };
    fetchPosts(page);
  }, [page, posts, length]); // if "page" changes run effect

  return (
    <section>
      <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl'>
        More Stories
      </h2>
      <div className='grid min-h-screen grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20'>
        {postList.map((post, index) => {
          return (
            <div key={`${post.id}-${index}`}>
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                stats={post.stats}
                onIsVisible={() => onIsVisible(index)}
              />
            </div>
          );
        })}
      </div>
      {endList && (
        <div className='my-12 text-xl text-center md:text-3xl'>Wow! You made it to the end!</div>
      )}
    </section>
  );
};
