export async function Fetcher(url) {
  return fetch(url).then((res) => res.json());
}
