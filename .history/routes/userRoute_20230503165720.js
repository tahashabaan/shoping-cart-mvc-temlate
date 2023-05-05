const express = require('express');

const {delFromCart} = require('../controllers/userService')
const router = express.Router();


router.route('/del-cart',delFromCart )

module.exports = router;