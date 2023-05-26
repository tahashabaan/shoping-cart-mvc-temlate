const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/shop';

exports.db = () =>{
 MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('connect database');
  return db;
});
}