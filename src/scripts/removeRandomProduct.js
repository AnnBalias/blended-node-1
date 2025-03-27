import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const removeRandomProduct = async () => {
  const readProducts = await fs.readFile(PATH_DB, 'utf-8');
  const productsList = JSON.parse(readProducts);

  const index = Math.floor(Math.random() * productsList.length);
  productsList.splice(index, 1);

  await fs.writeFile(PATH_DB, JSON.stringify(productsList, null, 2), 'utf-8');
};

removeRandomProduct();

// npm run remove-random
