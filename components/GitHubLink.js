export const GitHubLink = ({ path }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <a href={path} className="hover:underline text-sm text-gray-500">
        &lt; edit post &gt;
      </a>
    </div>
  );
};
