export const GitHubLink = ({ path }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <a href={path} className="hover:underline text-sm text-gray-400">
        &lt; Edit on GitHub &gt;
      </a>
    </div>
  );
};
