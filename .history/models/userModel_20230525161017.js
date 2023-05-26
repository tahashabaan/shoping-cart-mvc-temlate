const {ObjectId} = require('mongodb');

const { getDb } = require("../util/database");
const { get } = require('../routes/shop');

const readDate =(cb) => {
  const db = getDb();
     db
     .collection('users')
     .find()
     .toArray()
     .then(res=> cb(res) )
     .catch(err => cb(err))
}

const calcTotalPrice = (items) => {
  let totalPrice = 0;
   items.reduce((preVal, curVal) => {
       totalPrice += curVal.price * curVal.qty;  
    }, 0);
    return totalPrice;
}

class User {

    constructor(userName, email, password, cart, id){
        this.name = userName;
        this.email = email;
        this.password = password;
        this.cart = cart;
        this._id = id;
    }

    save() {
       const db = getDb();
       db
       .collection('users')
       .insertOne(this)
       .then( res => console.log('added user'))
       .catch(err => console.log(err))
    }

     addToCart(product) { 
    
      const existingItemIndex = this.cart.items.findIndex(item => item.productId.toString() === product._id.toString());
      const updateCartItem =[...this.cart.items];
      let newQty = 1;
      if(existingItemIndex>=0) {
        newQty =updateCartItem[existingItemIndex].qty + 1;
        updateCartItem[existingItemIndex].qty = newQty;
      } 
      else {
        updateCartItem.push({
          productId: new ObjectId(product._id),
          qty: newQty
        })    
      }
      const updateCart = {items: updateCartItem}
      const db = getDb(); 
       return db
       .collection('users')
       .updateOne(
        {_id:new ObjectId(this._id)}, 
        {$set:{cart:updateCart}}
        ).then(res => res)
    }

     getFromCart(cb){
      readDate(cb)
    }

    addOrder(){
      let order={};
      this.getFromCart(user => {
        user=user[0];
        order = {
          user:{
            _id:new ObjectId(user._id),
            name: user.name,
            email: user.email 
          },
          items:user.cart.items
        };
  
      const db = getDb();
      db
      .collection('orders')
      .insertOne(order)
      .then((res) =>{
         this.cart = {items:[]};
    
          db
          .collection('users')
          .updateOne(
            {_id:new ObjectId(this._id)}, 
            {$set:{cart:{items:[]}}})
          })  
        })

  
     
    }

    getOrders(){
      const db = getDb();
     return db
      .collection('orders')
      .find()
      .then((res) =>{
        console.log(res)
      })
    }

     filterCart(id) {
      let updateCartItems =this.cart.items;
      updateCartItems=updateCartItems.filter(item => item.productId.toString() !== id);
      const db= getDb();
      db
      .collection('users')
      .updateOne(
        {_id:new ObjectId(this._id)},
        {$set:{cart:{items:updateCartItems}}})
       .then(res => res)
       .catch(err => console.log(err)) 
  }
  
    
    static findById(id) {
      const db = getDb();
      return db
       .collection('users')
       .findOne({_id: new ObjectId(id)})
       .then((result) =>  result)
       .catch((err) => {
           console.log(err)
       })
    }

}

module.exports = User;