/* eslint-disable no-shadow */
/* eslint-disable operator-assignment */
const Product = require('./product')
const {getDb} = require('../util/database');

const calcTotalPrice = (products) => {
    let totalPrice = 0;
    products.reduce((preVal, curVal) => {
       totalPrice += curVal.price * curVal.qty;  
    }, 0);
    return totalPrice;
}


module.exports = class Cart{
    // constructor(totalPrice){
    //   this.totalPrice = totalPrice;
    // }
  
   static addToCart(id, price) {
    Product.fetchById(id, prod => {
        const cart = {products:[], totalPrice:0, };

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
        else {
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
        getfromFile(carts => {
            carts.products = carts.products.filter(product => product.id !== id );
            carts.totalPrice = calcTotalPrice(carts.products);
            fs.writeFile(p, JSON.stringify(carts), (err)=>{
                console.log(err);
            })
        } )
    }
}