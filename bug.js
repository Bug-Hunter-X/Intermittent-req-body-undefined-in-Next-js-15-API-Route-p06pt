```javascript
// pages/api/route.js
export default function handler(req, res) {
  // The problem is that req.body is undefined here even when using POST method and setting Content-Type: application/json.
  console.log(req.body); // This will print undefined

  res.status(200).json({ name: 'John Doe' });
}
```