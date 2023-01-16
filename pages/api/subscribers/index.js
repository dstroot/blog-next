import client from '@mailchimp/mailchimp_marketing';
// https://github.com/mailchimp/mailchimp-marketing-node

export default async function handler(req, res) {
  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us20',
  });

  const response = await client.lists.getAllLists();
  // console.log(response);
  return res.status(200).json(response.lists[0].stats.member_count);
}
