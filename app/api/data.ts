export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
  ]);
}
