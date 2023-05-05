/* eslint-disable prefer-const */
const Cart = require('../models/cartModel');
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

  Cart.getFromCart(cart => {
    console.log(cart)
    // res.render('shop/cart', {
    //   path: '/cart',
    //   prods:cart.products,
    //   totalPrice: cart.totalPrice,
    //   pageTitle: 'Your Cart'
    // });
   
  });


};

exports.postCart = async (req, res, next) => {
  // get from client side
   const {productId}= req.body;
  //  const {price} = req.query;
  //  Product.fetchAll(products =>  {

  //  } )
   Cart.addToCart(productId, 23);

   res.redirect('/cart')  

  
};


exports.deleteCart = (req, res, next) => {
  const {cartId} = req.body;
  console.log(cartId);
  res.send('shgd')
}


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
