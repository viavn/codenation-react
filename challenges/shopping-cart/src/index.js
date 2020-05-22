const { products: productsList } = require('./data/products.json');
const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(/*ids, productsList*/) {
	const ids = [110, 120, 130, 140];
	console.log(productsList);
	// Dado uma lista de produtos, recuperar seus nomes e categorias
	const filterFn = filterProduct(ids);
	const filteredProducts = productsList.filter(filterFn);

	const mySet = new Set();
	filteredProducts.forEach(p => mySet.add(p.category));

	let promotion;
	if (mySet.size === 1) {
		promotion = promotions[0];
	}

	const totalWithoutDisccount = filteredProducts.reduce(getTotalValueWithoutDiscount, 0);
	const totalWithoutDisccountFn = getTotalWithDisccount(promotion);
	const totalWithDisccount = filteredProducts.reduce(totalWithoutDisccountFn, 0);

	const products = filteredProducts.map(mapProducts)
	return { products, promotion, totalPrice: totalWithDisccount };
}

const getTotalValueWithoutDiscount = (accumulator, curr) => accumulator + curr.regularPrice;

const getTotalWithDisccount = (promotionDesc) => {
	return (acc, curr) => {
		let val = 0;
		const promotion = curr.promotions.find(x => x.looks.includes(promotionDesc));

		if (promotion) val = promotion.price;
		else val = curr.regularPrice;

		return acc + val;
	}
};

const filterProduct = (ids) => {
	return (product) => ids.includes(product.id);
};

const mapProducts = (product) => {
	const { name, category } = product;
	return { name, category };
}

module.exports = { getShoppingCart };
