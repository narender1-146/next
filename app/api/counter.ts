import { NextApiRequest, NextApiResponse } from 'next';

let count = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  count++;
  res.status(200).json({ count });
}
