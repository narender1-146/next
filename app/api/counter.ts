import { NextApiRequest, NextApiResponse } from 'next';

let count = 0; // This is a simple in-memory counter

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  count++;
  res.status(200).json({ count });
}
