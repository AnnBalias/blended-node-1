import { writeProduct } from '../utils/writeProduct.js';

const clearProduct = async () => {
  await writeProduct([]);
};

clearProduct();

// npm run clear
