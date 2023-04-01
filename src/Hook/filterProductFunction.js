export const filterProductsByListOfCollection = (products, collections) => {
  const filteredProducts = products.filter((product) => {
    return collections.some((c) => product.collection.includes(c));
  });

  return filteredProducts;
};
