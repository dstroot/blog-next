import { get, upd } from '../../../lib/dynamodb';

export default async function handler(req, res) {
  let params = { TableName: process.env.TABLE_NAME };
  const { slug } = req.body;

  if (!slug) {
    return res.status(400).json({
      error: "Please provide a value for 'slug'",
    });
  }

  // METHOD SWITCH
  switch (req.method) {
    case 'GET':
      return getSlugCount(slug);
    case 'POST':
      return IncrementSlugCount(slug);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // GET
  async function getSlugCount(slug) {
    params = {
      ...params,
      Key: {
        slug: slug,
      },
    };

    try {
      const data = await get(params);
      if (data.Item) {
        return res.status(200).json(data.Item);
      } else {
        return res.status(404).json({ result: 'not found' });
      }
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  // POST
  async function IncrementSlugCount(slug) {
    params = {
      ...params,
      Key: {
        slug: slug,
      },
      UpdateExpression:
        'SET viewCount = if_not_exists(viewCount, :initial) + :incr',
      ExpressionAttributeValues: {
        ':initial': 0,
        ':incr': 1,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    try {
      const data = await upd(params);
      return res.status(201).json({ result: 'success', data: data.Attributes });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
