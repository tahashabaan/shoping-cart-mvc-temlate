const { MongoClient } = require('mongodb');

const url ='mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/?retryWrites=true&w=majority'

 let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(url).then(client =>{
    _db = 
    console.log('connec')
    callback(client);
  }).catch(err => console.log(err));
}