// const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {

	// Dado uma lista de produtos, recuperar seus nomes e categorias
	const filterFn = filterProduct(ids);
	const filteredProducts = productsList.filter(filterFn);

	// Separando as categorias
	const mySet = new Set();
	filteredProducts.forEach(p => mySet.add(p.category));

	let promotion = size[mySet.size];
	promotion = !!promotion ? promotion() : 'FULL LOOK';

	const totals = calculateTotals(filteredProducts, promotion);
	const values = calculateValues(totals.totalWithoutDiscount, totals.totalWithDisccount);

	const products = filteredProducts.map(mapProducts)
	return { products, promotion, totalPrice: `${totals.totalWithDisccount}`, ...values };
}

const size = {
	1: () => 'SINGLE LOOK',
	2: () => 'DOUBLE LOOK',
	3: () => 'TRIPLE LOOK'
};

const calculateTotals = (products, promotion) => {
	const totalWithoutDiscount = products.reduce(getTotalValueWithoutDiscount, 0);
	const totalWithoutDiscountFn = getTotalWithDisccount(promotion);
	const totalWithDiscount = products.reduce(totalWithoutDiscountFn, 0);

	return {
		totalWithoutDiscount,
		totalWithDisccount: totalWithDiscount.toFixed(2)
	};
};

const calculateValues = (totalWithoutDiscount, totalWithDisccount) => {
	let discountValue = calculateDiscountValue(totalWithoutDiscount, totalWithDisccount);
	discountValue = `${discountValue.toFixed(2)}`;

	let discountPercentage = calculatePercentual(totalWithoutDiscount, discountValue);
	discountPercentage = `${discountPercentage}%`;

	return { discountValue, discount: discountPercentage };
};

const calculatePercentual = (totalWithoutDiscount, discountValue) => ((discountValue * 100) / totalWithoutDiscount).toFixed(2);

const calculateDiscountValue = (val1, val2) => (val1 - val2);

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
