const { ObjectId } = require('mongodb');

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
  
   static addToCart(id) { 

    const db = getDb();
     db
     .collection('cart')
     .find()
     .toArray()
     .then(cartItems => {
        let cart = {products:[], totalPrice:0};
        if((cartItems.length>0)){
            cart =cartItems[0];
            console.log(cart);
        }

     const existingProductIndex = cart.products.findIndex(product => product.id === id);
     const existingProduct = cart.products[existingProductIndex];
       
     if(existingProduct) {
          existingProduct.qty += + 1;
          cart.products[existingProductIndex] = existingProduct;
          } else{
            Product.fetchById(id, prod =>{
                const updateProduct={...prod, qty:1};
                cart.products.push(updateProduct)
             })    
          }
          cart.totalPrice=calcTotaPrice(cart.products);

          db.collection('cart').updateOne({_id:new ObjectId(id)}, {$set: cart})
     
            })    
    
   
     .catch(err => console.log(err))








    // Product.fetchById(id, prod => {
    //     const cart = {products:[], totalPrice:0, };

    //         const existingProductIndex = cart.products.findIndex(product => product.id === id);
    //         const existingProduct = cart.products[existingProductIndex];
    //         if(existingProduct){
    //             existingProduct.qty += + 1;
    //             cart.products[existingProductIndex] = existingProduct;
    //         } else{
    //            const updateProduct={id, qty:1,price};
    //             cart.products.push(updateProduct)
    //         }

    //         cart.totalPrice=calcTotalPrice(cart.products);
         
    //         getDb.collection('cart').save();
    //     })  
       
   
    }

    static getFromCart(cb) {
        const db = getDb();
        db
        .collection('cart')
        .find()
        .toArray()
        .then(products=> cb(products))
        .catch(err => console.log(err))
    }

    static filterCart(id) {
        const db = getDb();
        db
        .collection('cart')
        .deleteOne({_id : new ObjectId(id)})
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
}
