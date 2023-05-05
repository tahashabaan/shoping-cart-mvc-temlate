cons
const path =require('path')

module.exports = class Cart{
    // constructor(){
    //  // intial data   
    // }
    addToCart(){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');


    }
}