import { readProduct } from '../utils/readProduct.js';

const getAllProducts = async () => {
  const productsList = await readProduct();
  console.log(productsList);
};

getAllProducts();

// npm run get-all
