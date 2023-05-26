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

    static addToCart(product) { 

      const updateCart = {items:[{...product, qty:1}]}
      const db = getDb(); 
      return db
      .collection('users')
      .updateOne(
        {_id:new ObjectId(this._id )}, 
        {$set:{cart:updateCart}}
        ).then(res => res)

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