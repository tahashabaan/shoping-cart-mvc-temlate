const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.route('/add-product')
.get(adminController.getAddProduct)
.post( adminController.postAddProduct);
// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/products => put
router.get('/edit-product';
// /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

module.exports = router;
