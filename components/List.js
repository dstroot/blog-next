import { PostPreview } from "./PostPreview";

export const List = ({ posts }) => {
  return (
    <>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>

      {posts.map((post, index) => {
        return (
          <div key={`${post.id}-${index}`}>
            <p>
              {post.title}, {post.date}
            </p>
            {/* <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
                stats={post.stats}
                // fileName={post.fileName}
                onIsVisible={() => onIsVisible(index)}
              /> */}
          </div>
        );
      })}
    </>
  );
};
