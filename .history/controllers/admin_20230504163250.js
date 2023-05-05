const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};



exports.getEditProduct =  (req, res, next) => {
  const {productId} = req.params;
  Product.fetchAll( products => {
     const product = products.find(prod => prod.productId === productId);
     res.render('admin/edit-product', {
       pageTitle: 'Edit Product',
       product,
       path: 'admin/edit-product',
       editing:
     })
    })   
};
    
exports.putEditProduct =  (req, res, next) => {
  const {productId} = req.params;
  const {title, imageUrl, price, description} = req.body;
  const product = new Product(productId, title, imageUrl, price, description);
  product.save();
};
  

exports.delProduct =  (req, res, next) => {
  
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/delete-product'
    });

};

