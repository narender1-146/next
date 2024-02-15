let count = 0; // This is a simple in-memory counter

export default function handler(req, res) {
  count++;
  res.status(200).json({ count });
}
