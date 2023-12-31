const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

// Database Name
const dbName = 'learningNode';

async function connect() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db(dbName);
    
    return db;
  }

  module.exports = connect;