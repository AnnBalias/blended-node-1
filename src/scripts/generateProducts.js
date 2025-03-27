import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const generateProducts = async (number) => {
  const productsList = await readProduct();
  const newProducts = Array(number).fill(0).map(createFakeProduct);
  await writeProduct([...productsList, ...newProducts]);
};

generateProducts(3);

// npm run generate
