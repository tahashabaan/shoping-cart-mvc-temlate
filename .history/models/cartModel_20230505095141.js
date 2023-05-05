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
       fs.readFile(p, (err, dataFile) => {
          if(err || !dataFile) return cb({products:[], totalPrice:0});
           cb(JSON.parse(dataFile))
       })
}

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
   static addToCart(id, price) {

     fs.readFile(p, (err, fileContent) => {

           
        
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

    // static filterCart(id) {
    //     getfromFile(carts => {
    //         carts.products = carts.products.filter(product => product.id === id );
    //         carts.totalPrice = calcTotalPrice(carts.products);
    //         fs.writeFile(p, JSON.stringify(carts), (err)=>{
    //             console.log(err);
    //         })
    //     } )
    // }
}