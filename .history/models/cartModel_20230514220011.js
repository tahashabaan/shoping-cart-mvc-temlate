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
  
   static addToCart(id, price) { 
    const cart = {products:[], totalPrice:0, qty:1 };
    const db = getDb();
     db
     .collection('cart')
     .findOne({_id: new ObjectId(id)})
     .then(cartItem => {
       if(cartItem){
           cartItem.qty += 1
       }
       else{
            Product.fetchById(id, prod =>{
              cart.products.push(prod);  
            })    
       }
     cart.totalPrice = calcTotalPrice(cart.products);
     db,
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