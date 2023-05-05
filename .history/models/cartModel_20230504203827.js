/* eslint-disable no-shadow */
/* eslint-disable operator-assignment */
const fs = require('fs');
const path =require('path');

const calcTotalPrice = (products) => {
    let totalPrice = 0;
    products.reduce((preVal, curVal) => {
       totalPrice += curVal.price * curVal.qty;
       
    }, 0);
    return totalPrice;
}

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

const getfromFile = (cb) => {
        fs.readFile(p, (err, data) => {
             if(err) (cb({products:[], totalPrice:0}))
           cb(JSON.parse(data))
        })
}

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
   static addToCart(id, price) {
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

            cart.totalPrice=calcTotalPrice(cart.products);

           fs.writeFile(p, JSON.stringify(cart), (err) =>{
            console.log(err)
          })

        })

    }

    static getFromCart(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

        fs.readFile(p, (err, data) => {
             if(err) (cb({products:[], totalPrice:0}))
          cb(JSON.parse(data))
        })
    }

    static delFromCart(id) {
        // product then check qty <=1 => remov   qty>1  decresse qty

        // update total price

    }

}