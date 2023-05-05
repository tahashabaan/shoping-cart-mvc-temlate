/* eslint-disable no-shadow */
/* eslint-disable operator-assignment */
const fs = require('fs');
const path =require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

const calcTotalPrice = (products) => {
    let totalPrice = 0;
    products.reduce((preVal, curVal) => {
       totalPrice += curVal.price * curVal.qty;  
    }, 0);
    return totalPrice;
}

const getfromFile = (cb) => {
       fs.readFile(p, (err, fileContent) => {
        if (!err && !fileContent.toString()) {
           cb({products:[], totalPrice:0})
          } else {
            cb(JSON.parse(fileContent));
          }
       })
}

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
  
   static addToCart(id, price) {

     fs.readFile(p, (err, fileContent) => {
        let cart = {products:[], totalPrice:0};
        if (!err && fileContent.toString() ){
                cart = JSON.parse(fileContent)
            }

            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];
            if(existingProduct){
                existingProduct.qty += + 1;
                cart.products[existingProductIndex] = existingProduct;
            } else{
               const updateProduct={id, qty:1,price};
                cart.products.push(updateProduct)
            }

            cart.totalPrice=calcTotalPrice(cart.products);

           fs.writeFile(p, JSON.stringify(cart), (err) =>{
            console.log(err)  
        })
    })
    }

    static getFromCart(cb) {
        getfromFile(cb);
    }

    static delFromCart(id) {
        // product then check qty <=1 => remov   qty>1  decresse qty
      getfromFile(carts => {

        const cartItemIndex = carts.products.findIndex(prod => prod.id === id);
        const cartItem =  carts.products[cartItemIndex];

        
        if (cartItem.qty <= 1) {
            carts.products = carts.products.filter(prod => prod.id !== id);
        } 
        else{
            cartItem.qty -= 1;
            carts.products[cartItemIndex] = cartItem;
        }

        carts.cart = calcTotalPrice(carts.products);
        
        fs.writeFile(p, JSON.stringify(carts), (err, data) =>{
            console.log(err);
        })
      })
        // update total price

    }

    static filterCart(id) {
        getfromFile(cart => {
            carts.products = carts.products.filter(product => product.id === id );
            carts.totalPrice = calcTotalPrice(carts.products);
            fs.writeFile(p, JSON.stringify(carts), (err)=>{
                console.log(err);
            })
        } )
    }
}