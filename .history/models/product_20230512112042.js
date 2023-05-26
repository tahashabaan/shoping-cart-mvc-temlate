/* eslint-disable import/extensions */
const { ObjectId } = require('mongodb');
const {getDb} = require('../util/database');

module.exports = class Product {

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db =getDb();
    db.collection('products')
    .insertOne(this)
    .then(products => console.log(products))
    .catch(err => console.log(err));
  }


  static fetchAll() {
     const db = getDb();

     conso.log(db.collection('products').find());
     
    //  return db.collection('products')
    //  .find()
    //  .toArray()
    //  .then( products => console.log(products))
    //  .catch(err => console.log(err));
  }


  static fetchById(id) {
    const db = getDb();
     return db.collection('products')
     .find({"_id": ObjectId(id)})
     .toArray()
     .then( products => cb(products) )
     .catch(err => console.log(err));
  }

  static delProduct(id) {
    const db = getDb();
    db.collection('products').deleteOne({ "_id" : ObjectId(id)});
  }
  
};
