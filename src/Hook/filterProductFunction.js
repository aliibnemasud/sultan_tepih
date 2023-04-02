export const filterProductsByListOfCollection = (products, collections) => {
  const filteredProducts = products.filter((product) => {
    return collections.some((c) => product.collection.includes(c));
  });

  return filteredProducts;
};


export const allFilterCollection  = (products, category, collection, size) => {
  const filteredProducts = products.filter(product => {
    return category.every(c => product.category.includes(c)) &&
    collection.every(cat => product.collection.includes(cat)) && 
    size.every(size => product.sizes.includes(size)) 
  });

  return filteredProducts  
}
