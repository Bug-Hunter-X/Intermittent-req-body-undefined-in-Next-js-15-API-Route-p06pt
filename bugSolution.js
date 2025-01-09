```javascript
// pages/api/route.js
import { NextResponse } from 'next/server';

export async function middleware(req) {
  if (req.method === 'POST') {
    const body = await req.json();
    return NextResponse.next({ request: { ...req, body } });
  }
  return NextResponse.next();
}

export default function handler(req, res) {
  console.log(req.body); // req.body should now be defined
  res.status(200).json({ name: 'John Doe' });
}
```