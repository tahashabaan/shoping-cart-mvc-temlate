/* eslint-disable no-shadow */
/* eslint-disable operator-assignment */
const fs = require('fs');
const path =require('path');
const Product = require('./product');

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
   static addToCart(id, price){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
        fs.readFile(p, (err, data) => {
            let cart ={products:[], totalPrice:0}
            if (!err) {
                cart = JSON.parse(data)
            }

            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updateProduct;
            if(existingProduct){
                updateProduct = {...existingProduct};
                updateProduct.qty += + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updateProduct;
            } else{
                updateProduct={id, qty:1, price};
                cart.products.push(updateProduct)
            }
           cart.products.reduce((preVal, curVal) => {
            let totalPrice = 0;
              totalPrice = curVal.price * curVal.qty;
              cart
           }, 0)
           console.log(cart.totalPrice)
           fs.writeFile(p, JSON.stringify(cart), (err) =>{
            console.log(err)
          })

        })

    }
}