// app/api/clients/route.js
import clientPromise from '../../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('hos-dum'); // Make sure to use the correct database name
    const clients = await db.collection('clients').find({}).toArray();

    return new Response(JSON.stringify(clients), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    return new Response(`Error fetching clients: ${error.message}`, { status: 500 });
  }
}
