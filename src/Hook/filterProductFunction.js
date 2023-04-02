export const filterProductsByListOfCollection = (products, collections) => {
  const filteredProducts = products.filter((product) => {
    return collections.some((c) => product.collection.includes(c));
  });

  return filteredProducts;
};

/* export const allFilterCollectionn = (products, categories, collections, size) => {
  const filteredProducts = products.filter((product) => {
    return categories.every((c) => product.category.includes(c)) && 
    collections.includes(product.collection) &&
    size.every(size => product.sizes.includes(size))
  });
  return filteredProducts;
};
 */

export const allFilterCollection = (products, categories, collections, sizes) => {
  let filteredProducts = [];
  if (collections.length > 0 || categories.length > 0 || sizes) {
    filteredProducts = products.filter(product => {
    const matchCollections = collections.length === 0 || collections.includes(product.collection);
    const matchCategories = categories.length === 0 || categories.every(c => product.category.includes(c));
    const matchSize = sizes.length === 0 || sizes.every(s => product.sizes.includes(s));
    return matchCollections && matchCategories && matchSize;
  });
}

return filteredProducts

}