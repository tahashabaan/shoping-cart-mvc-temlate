const express = require('express');

const {delFromCart} = require('../controllers/userService');

const router = express.Router();


router.route('/delete-cart',delFromCart )

module.exports = router;