import { MongoClient } from 'mongodb';
async function handler(req, res) {
  if (req.method == 'POST') {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'invalid email address' });
      return;
    }
    const client = await MongoClient.connect(
      'mongodb+srv://mpr:BUWF9@ua6i$j69C@cluster0.00gzi.mongodb.net/events?retryWrites=true&w=majority'
    );
    const db = client.db();
    await db.collection('newsletter').insertOne({ email: userEmail });
    client.close();
    console.log(userEmail);
    res.status(201).json({ message: 'signed up' });
  }
}
export default handler;
