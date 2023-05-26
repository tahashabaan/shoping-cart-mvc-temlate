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
     .then( products => cb(products) ).catch();
  }

  static delProduct(id) {
   
  }
  
};
