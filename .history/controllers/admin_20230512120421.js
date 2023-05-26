const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const {title, imageUrl, price, description} = req.body;
  const product = new Product(title, imageUrl, description, price)
  product.save()                              
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.fetchById(productId, (product) => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      product,
      path: "admin/edit-product",
      editing: true,
    });
  });
};

exports.putEditProduct = (req, res, next) => {
  const { productId } = req.params;
  const { title, imageUrl, description, price } = req.body;
  const product = new Product( title, imageUrl, description, price);
  product.save(productId);
  res.redirect("/admin/products");
};

exports.postDelProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.delProduct(productId);
  res.redirect("/admin/products");
};
