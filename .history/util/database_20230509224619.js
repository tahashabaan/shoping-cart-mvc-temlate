const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/shop';

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('Connected to MongoDB server');
  // Use the db object to interact with your database
});