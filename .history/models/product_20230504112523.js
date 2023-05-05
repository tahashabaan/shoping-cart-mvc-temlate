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
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
     if(this.id){
      const proudctIndex = products.findIndex(prod=> prod.id === this.id);
       const product = products[proudctIndex];

        products[proudctIndex] = product;
      
        products.push(this);
  }
      this.id = Math.random().toFixed(3).toString();
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
        product.title = this.title?this.title: product.title;
        product.price = this.price?this.price: product.price;
        product.imageUrl = this.imageUrl?this.imageUrl: product.imageUrl;
        product.description = this.description?this.description: product.description;
        products[proudctIndex] = product;
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
    } else{
      alert('product not found')
    }
 
  })
 }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }



};
