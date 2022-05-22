import { scan } from '../../../lib/dynamodb';

let params = { TableName: process.env.TABLE_NAME };

export default async function handler(req, res) {
  // METHOD SWITCH
  switch (req.method) {
    case 'GET':
      return getViews();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // GET
  async function getViews() {
    params = {
      ...params,
      FilterExpression: 'begins_with(slug, :slug) and viewCount > :viewCount',
      ExpressionAttributeValues: {
        ':viewCount': 10,
        ':slug': '20',
      },
    };

    try {
      const data = await scan(params);

      if (data) {
        return res.status(200).json(data.Items);
      } else {
        return res.status(404).json({ result: 'not found' });
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
