const Product = require('../models/product');




exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
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




exports.getEditProduct =  (req, res, next) => {

  const {productId} = req.params;
  Product.fetchAll( products => {
     const product = products.find(prod => prod.id === productId);
     console.log(product)
     res.render('admin/edit-product', {
       pageTitle: 'Edit Product',
       product,
       path: 'admin/edit-product',
       editing: true,
     })
    })   
};
    
exports.putEditProduct =  (req, res, next) => {
  const {productId} = req.params;
  const {title, imageUrl, description,price} = req.body;
  const product = new Product(productId, title, imageUrl,description, price);
  product.save();
  res.redirect('/admin/products')
};
  

exports.delProduct =  (req, res, next) => {
  const {product}
   res.send('welcome in delete page')

};

