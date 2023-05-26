const Product = require("../models/product").default;

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
  const {title} = req.body;
  const {imageUrl} = req.body;
  const {price} = req.body  const description = req.body;
  const {product} = new Product( title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getEditProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.fetchAll((products) => {
    const product = products.find((prod) => prod.id === productId);
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
  const product = new Product(productId, title, imageUrl, description, price);
  product.save();
  res.redirect("/admin/products");
};

exports.postDelProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.delProduct(productId);
  res.redirect("/admin/products");
};
