export const config = {
  runtime: 'edge',
};

export default async function handler(req, res) {
  const results = await fetch(encodeURI(process.env.GITHUB_API)).then((res) => res.json());

  return res.status(200).json({
    description: results.description,
    url: results.html_url,
    forks: results.forks,
    stars: results.stargazers_count,
    watchers: results.watchers_count,
  });
}
