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


module.exports = class Cart {

    constructor(id, cart, userId){
      this.cart = cart;
      this.usreId= userId;
      this.id= new ObjectId(id)
    }
  
   static addToCart() { 

   
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
