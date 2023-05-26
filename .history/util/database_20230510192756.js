const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha7008@node-complete.y1j3stc.mongodb.net/'



exports.mongoConnect = (callback) => {
  MongoClient.connect(url).then(client =>{
    method.call(context, arguments)
  }).catch(err => console.log(err));
}