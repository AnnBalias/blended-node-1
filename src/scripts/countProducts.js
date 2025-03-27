import { readProduct } from '../utils/readProduct.js';

const countProducts = async () => {
  const productsList = await readProduct();
  console.log(productsList.length);
};

countProducts();

// npm run count
