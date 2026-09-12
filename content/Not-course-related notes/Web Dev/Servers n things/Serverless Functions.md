> A small piece of back-end that's spun up on *demand*
> No separate server needs to be managed. Only runs when called (can't do things in the background)

Going to or hitting `https://yoursite.vercel.app/api/greet?name=Kido` will spin up the serverless function 

It might look something like this:
```js
export default function handler(req, res) {
  const name = req.query.name || "Guest";
  res.status(200).json({ message: `Hello, ${name}!` });
}
```