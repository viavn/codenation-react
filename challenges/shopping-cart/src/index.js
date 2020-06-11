const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getShoppingCart(ids, productsList) {
  // Dado uma lista de produtos, recuperar seus nomes e categorias
  const categoriesSet = new Set();
  const filteredProducts = productsList.reduce((accumulator, current) => {
    if (ids.includes(current.id)) {
      // Separando as categorias
      categoriesSet.add(current.category);

      return [...accumulator, current];
    }

    return accumulator;
  }, []);

  const promotion = promotions[categoriesSet.size - 1];
  const totals = calculateTotals(filteredProducts, promotion);

  const products = filteredProducts.map((product) => {
    const { name, category } = product;
    return { name, category };
  });

  return {
    products,
    promotion,
    ...totals,
  };
}

const calculateTotals = (products, promotion) => {
  const totalWithoutDiscount = products.reduce(
    (accumulator, curr) => accumulator + curr.regularPrice,
    0
  );
  const totalDiscountFn = totalWithDisccountReducer(promotion);
  const totalWithDiscount = products.reduce(totalDiscountFn, 0);

  const discountValues = calculateDiscountValues(
    totalWithoutDiscount,
    totalWithDiscount
  );

  return {
    totalPrice: `${totalWithDiscount.toFixed(2)}`,
    ...discountValues,
  };
};

const calculateDiscountValues = (totalWithoutDiscount, totalWithDisccount) => {
  const discountValue = totalWithoutDiscount - totalWithDisccount;
  const discountPercentage = (
    (discountValue * 100) /
    totalWithoutDiscount
  ).toFixed(2);

  return {
    discountValue: `${discountValue.toFixed(2)}`,
    discount: `${discountPercentage}%`,
  };
};

const totalWithDisccountReducer = (promotionDesc) => {
  return (acc, curr) => {
    let val = 0;
    const promotion = curr.promotions.find((x) =>
      x.looks.includes(promotionDesc)
    );

    if (promotion) val = promotion.price;
    else val = curr.regularPrice;

    return acc + val;
  };
};

module.exports = { getShoppingCart };
