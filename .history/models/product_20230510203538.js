/* eslint-disable import/extensions */
const {ge}
module.exports = class Product {

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
     if(this.id){
      const proudctIndex = products.findIndex(prod=> prod.id === this.id);
      products[proudctIndex] = this;
      // products = [...updateProducts];
      }
      else{
        this.id = Math.random().toFixed(3).toString();
        products.push(this);
      }
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });

    });

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
