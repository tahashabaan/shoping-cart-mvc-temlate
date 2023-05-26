const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/';


const url = 'mongodb://localhost:27017/myproject';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Connected to MongoDB server');
  // Use the db object to interact with your database
});