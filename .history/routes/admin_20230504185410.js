
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
router.route('/edit-product/:productId')
.get(adminController.getEditProduct)
.post(adminController.putEditProduct);

router.delete(), adminController.delProduct);

// /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

module.exports = router;
