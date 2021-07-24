import { GitHubLink } from "./GitHubLink";

export const PostBody = ({ content, path }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="prose prose-lg dark:prose-dark max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <GitHubLink path={path} />
    </div>
  );
};

// max-w-2xl
