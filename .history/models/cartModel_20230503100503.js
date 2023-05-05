const fs = require('fs');
const path =require('path');
const Product = require('./product');

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
    addToCart(id){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
        fs.readFile(p, (err, data) => {
            let cart ={products:[], totalPrice:0}
            if (!err) {
                cart = JSON.parse(data)
            }

            const existingProduct = cart.products.find(product => product.id === id);
            let updateProduct;
            if(existingProduct){
                updateProduct = {...existingProduct};
                updateProduct.qty = +existingProduct.qty + 1;
            }
          fs.writeFile(p, JSON.stringify(cart), (r))

        })

    }
}