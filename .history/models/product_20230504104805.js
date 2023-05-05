const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toFixed(3).toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

 update(id){
  getProductsFromFile(products => {
    const proudctIndex = products.findIndex(prod=> prod.id === id);
    const product = products[proudctIndex];
    if(product){
      
    }
    // products.push(this);
    fs.writeFile(p, JSON.stringify(products), err => {
      console.log(err);
    });
  })
 }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }



};
