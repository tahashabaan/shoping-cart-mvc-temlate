/* eslint-disable prefer-const */
const fs  = require('fs');
const path  = require('path');

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getProduct = (req, res, next) => {
  const {productId} = req.params ;
  console.log(productId);
  Product.fetchAll(products =>{
    const product = products.find(prod => prod.id === productId)
    res.render('shop/product-detail',{
      product,
      pageTitle :product.title,
      path:'/products'
    })
  })
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  // get ftro
   const {productId, quantity}= req.body;

   Product.fetchAll( products =>{
   const productExitIndex = products.findIndex(product => product.id ===productId);
      fs.readFile(path.join(__dirname, 'data', 'cart.json'), 'utf8', (err, data) => {
        let carts = [];
           if(err) carts.push(products[productExitIndex])
            else {
              carts=JSON.parse(data);
              const cartItemIndex = carts.findIndex(cart => cart.id ===productId);
              const cartItem =carts[cartItemIndex];
               if(+quantity >1)  cartItem.quantity = quantity;
               else cartItem.quantity +=1;
            }
         
           res.send(carts)
      })
}) 
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
