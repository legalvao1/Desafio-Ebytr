const { MongoClient } = require('mongodb');

const OPTION = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = async () =>
  db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTION).then((conn) => {
      db = conn.db('ebytr');
      return db;
      });
module.exports = { connection };