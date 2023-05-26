const {ObjectId} = require('mongodb');

const { getDb } = require("../util/database");

class User{
    constructor(userName, email, password, cart, id){
        this.name = userName;
        this.email = email;
        this.password = password;
        this.cart = cart;
        this.id = new ObjectId(id)
    }

    save() {
       const db = getDb();
       db
       .collection('users')
       .insertOne(this)
       .then( res => console.log('added user'))
       .catch(err => console.log(err))
    }

    static addToCart(product){
      const updateCart = {items:[{...product, qty:1}]}
      const db = getDb();
      db
      .collection('users')
      .updateOne({_id:this.id}, {$set:{carupdateCart}})
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