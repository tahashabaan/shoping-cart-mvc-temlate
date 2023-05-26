const User = require('../models/userModel')

exports.signUp = (req, res, next) => {
   const {name , email, password} = req.body;
   const user = new User(name, email, password);
   user.save();
}

exports.logIn = (req, res, next) => {
   const {userId} = req.body
   User.findById(userId).then()
}