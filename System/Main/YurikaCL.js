const { MongoClient } = require('mongodb'); // import { MongoClient } from 'mongodb'
const QuickDB = require('quick.db'); // import online data base to local_database
const config = require("../Config/config.json"); // configuration
const { logger } = require("../Client/LogClient.js"); // send log database

// Connection URL
const url = config.mongodb_url;
const client = new MongoClient(url);

// Database Name
const dbName = config.mongodb_name_database;

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  logger.info('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());