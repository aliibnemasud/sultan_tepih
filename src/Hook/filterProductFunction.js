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

    //const matchSize = !sizeToFilter || product.size === sizeToFilter;

    return matchCollections && matchCategories && matchSize;
  });
}

return filteredProducts

}




























/* export const allFilterCollection  = (products, categories, collections, size) => {
  const filteredProducts = products.filter(product => {
    return categories.every(c => product.category.includes(c)) &&
    size.every(size => product.sizes.includes(size)) &&
    collections.every(cat => product.collection.includes(cat))  
    
  });

  return filteredProducts  
}
 */



/* const products = [
  { id: 1, name: 'Product A', collections: ['Collection 1', 'Collection 2'], category: 'Category A' },
  { id: 2, name: 'Product B', collections: ['Collection 2', 'Collection 3'], category: 'Category B' },
  { id: 3, name: 'Product C', collections: ['Collection 1'], category: 'Category A' },
  { id: 4, name: 'Product D', collections: ['Collection 3'], category: 'Category C' },
  { id: 5, name: 'Product E', collections: ['Collection 2'], category: 'Category B' }
]; */

/* const collectionsToFilter = ['Collection 1', 'Collection 2'];
const categoriesToFilter = ['Category A']; */

/* const filterByCollectionsOnly = categoriesToFilter.length === 0;

const filteredProducts = products.filter(product => {

  const matchCollections = collectionsToFilter.every(c => product.collections.includes(c));
  const matchCategories = categoriesToFilter.includes(product.category);

  return filterByCollectionsOnly ? matchCollections : (matchCollections && matchCategories);
});

console.log(filteredProducts);
 */




