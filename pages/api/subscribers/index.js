export default async function handler(req, res) {
  const url = encodeURI(
    process.env.NEXT_PUBLIC_MAILCHIMP_URL + '/lists/' + process.env.MAILCHIMP_LIST_ID
  );
  const options = {
    headers: {
      Authorization: 'Bearer ' + process.env.MAILCHIMP_API_KEY,
    },
  };

  const results = await fetch(url, options).then((res) => res.json());
  return res.status(200).json(results.stats.member_count);
}
