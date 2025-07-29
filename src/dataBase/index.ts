
// // db.js
// const { MongoClient } = require('mongodb');
// require('dotenv').config();

// const client = new MongoClient(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// let db = null;

// async function connect() {
//   if (db) return db;
//   await client.connect();
//   console.log('✅ MongoDB connected');
//   db = client.db();
//   return db;
// }

// function getDb() {
//   if (!db) throw new Error('Database not connected. Call connect() first.');
//   return db;
// }

// async function close() {
//   await client.close();
//   console.log('MongoDB connection closed');
// }

// module.exports = { connect, getDb, close };


// Example implementation, ensure you export the required functions

import { MongoClient, Db } from 'mongodb';

let db: Db;

export async function connect() {
  const client = await MongoClient.connect(process.env.DB_URI || 'mongodb://localhost:27017/insightMesh', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any);
  db = client.db();
}

export function getDb(): Db {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}

export async function closed() {
  if (db) {
    await db.client.closed();
  }
}