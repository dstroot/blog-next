import { upd } from '../../../lib/dynamodb';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  let params = { TableName: csp_reports };
  var reqJson = JSON.parse(req.body);
  // var reqJson = JSON.parse(req.body, (value) => {
  //   if (value === null || value === '') {
  //     return 'NA';
  //   }
  //   return value;
  // });

  if (!reqJson.hasOwnProperty('csp-report')) {
    return res.status(400).json('csp report missing');
  }

  let item = reqJson['csp-report'];
  item.id = uuidv4();
  item.timestamp = new Date().getTime().toString();

  // METHOD SWITCH
  switch (req.method) {
    case 'POST':
      return PostCSP();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // POST
  async function PostCSP() {
    params = {
      ...params,
      Item: item,
      ReturnValues: 'UPDATED_NEW',
    };

    try {
      const data = await upd(params);
      return res.status(201).json({ result: 'success', data: data });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
