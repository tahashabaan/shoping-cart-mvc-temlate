const { MongoClient } = require('mongodb');

const url ='mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/?retryWrites=true&w=majority'

 let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(url).then(client =>{
    _db = client.db();
    console.log('connected');
    callback(client);
  }).catch(err => console.log(err));
}

exports.getDb = () =>{
  return _db;
}