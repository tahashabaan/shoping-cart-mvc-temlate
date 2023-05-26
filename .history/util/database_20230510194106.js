const { MongoClient } = require('mongodb');

const url ='mongodb+srv://tahashabaan:Taha7008@cluster0.mxlj32j.mongodb.net/test



 let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(url).then(client =>{
    _db = 
    callback(client);
  }).catch(err => console.log(err));
}