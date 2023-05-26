const { MongoClient } = require('mongodb');

const url = 'smongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/hop';

exports.db = () =>{
 MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('connect database');
 
});
}