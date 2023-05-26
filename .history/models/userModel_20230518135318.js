const {ObjectId} = require('mongodb');

const { getDb } = require("../util/database");

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
     const db = getDb();
     db
     .collection('users')
     .find()
     .toArray()
     .then(res=> cb(res) )
     .catch(err => console.log(ew))
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