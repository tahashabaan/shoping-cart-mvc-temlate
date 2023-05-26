const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha@node-complete.y1j3stc.mongodb.net/'



exports.db = () =>{
 MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('connect database');
 
});
}