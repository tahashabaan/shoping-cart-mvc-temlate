/* eslint-disable import/extensions */
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
    db.collection('products').insertMany([{...this}]);
  }



  static fetchAll(cb) {
     const db = getDb();
     db.collection('products').find()
     .then( products => cb(products) )
     .catch(err => console.log(err));
  }

  static fetchById(id) {
    const db = getDb();
     db.collection('products').find({})
     .then( products => cb(products) )
     .catch(err => console.log(err));
  }

  static delProduct(id) {
    const db = getDb();
    db.collection('products').deleteOne({ "_id" : ObjectId(id)});
  }
  
};
