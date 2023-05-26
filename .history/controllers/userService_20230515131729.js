const User = require('../models/userModel')

exports.signUp = (req, res, next) => {
   const {name , email, password} = req.bod
  const user = new User()
}