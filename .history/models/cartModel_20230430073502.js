const fs = require('fs');
const path =require('path');
const Product = require('./product');

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
    addToCart(){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
        Product.fetchAll


    }
}