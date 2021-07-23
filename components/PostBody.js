export const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-lg dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

// max-w-2xl
