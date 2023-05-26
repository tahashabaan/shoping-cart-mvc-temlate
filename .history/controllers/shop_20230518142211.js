/* eslint-disable no-shadow */
const Cart = require("../models/cartModel");
const Product = require("../models/product");
const User = require("../models/userModel");


exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getProducts = (req, res, next) => {  
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const { productId } = req.params;
   Product.fetchById(productId , (product) => {
    res.render("shop/product-detail", {
      product,
      pageTitle: product.title,
      path: "/products",
    });
  });
};



exports.getCart = (req, res, next) => {
  User.getFromCart((carts) => {
    carts = carts[0];
    res.render("shop/cart", {
      path: "/cart",
      prods: carts.cart.items,
      totalPrice: carts.cart.totalPrice,
      pageTitle: "Your Cart",
    });
  });
};

exports.postCart = async (req, res, next) => {
  const { productId } = req.body;
  const {name, email,passwoed, cart, _id} = req.user;
  Product.fetchById(productId, prod => { 
   const user = new User(name, email, passwoed, cart, _id);
   user.addToCart(prod)
   .then(res => console.log(res))
})
  res.redirect("/cart");
};

exports.deleteCart = (req, res, next) => {
  const { cartId } = req.body;
  const userId= req.user._id;
  console.log('user')
  console.log(userId);
  User.filterCart(cartId);
  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};
