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
    try {
      const client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'connecting to the database failed!' });
      return;
    }
    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'connecting to the database failed!' });
      return;
    }

    const db = client.db();
    await db.collection('newsletter').insertOne(insertDocument);

    console.log(userEmail);
    res.status(201).json({ message: 'signed up' });
  }
}
export default handler;
