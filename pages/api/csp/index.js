import { put } from '../../../lib/dynamodb';
import { v4 as uuidv4 } from 'uuid';

// export const config = {
//   runtime: 'edge',
// };

export default async function handler(req, res) {
  let params = { TableName: 'csp_reports' };
  const cspReport = JSON.parse(req.body);

  // validate we have a report
  if (!cspReport.hasOwnProperty('csp-report')) {
    return res.status(400).json({ error: 'csp report missing' });
  }

  // create item
  let item = cspReport['csp-report'];
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
    };

    try {
      const data = await put(params);
      return res.status(201).json({ result: 'success', data: data });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
