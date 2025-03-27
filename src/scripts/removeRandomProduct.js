import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const removeRandomProduct = async () => {
  const productsList = await readProduct();

  const index = Math.floor(Math.random() * productsList.length);
  productsList.splice(index, 1);

  await writeProduct(productsList);
};

removeRandomProduct();

// npm run remove-random
