const {ObjectId} = require('mongodb');

const { getDb } = require("../util/database");

class User{
    constructor(userName, email, password){
        this.name = userName;
        this.email = email;
        this.password = password;
    }

    save(){
       const db = getDb();
       db
       .collection('users')
       .insertOne(this)
       .then( res => console.log('added'))
       .catch(err => console.log(err))

    }

    static findById(id){
      const db = getDb();
      return db
       .collection('products')
       .findOne({_id: new ObjectId(id)})
       .then((result) =>  result)
       .catch((err) => {
           console.log(err)
       })
    }
}

module.exports = User;