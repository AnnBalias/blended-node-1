import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const addOneProduct = async () => {
  const productsList = await readProduct();
  productsList.push(createFakeProduct());
  await writeProduct(productsList);
};

addOneProduct();

// npm run add-one
