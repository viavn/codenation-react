const { getShoppingCart } = require('./index');
const { products } = require('../src/data/products');

const singleLook = [110, 120, 130, 140];
const doubleLook = [130, 140, 230, 260];
const tripleLook = [110, 130, 140, 230, 310, 330];
const fullLook = [120, 230, 310, 490];

const shoppingCart = getShoppingCart(singleLook, products);
console.log(shoppingCart);
