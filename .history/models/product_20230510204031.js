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
    getDb.collection.insertOne({...this})

  }



  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static delProduct(id) {
    getProductsFromFile(products => {
       products = products.filter(prod => prod.id !== id);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          if(!err){
            Cart.filterCart(id)
          }
        })
    })
  }
  
};
