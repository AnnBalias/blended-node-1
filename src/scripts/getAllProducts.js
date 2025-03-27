import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getAllProducts = async () => {
  const readProducts = await fs.readFile(PATH_DB, 'utf-8');
  const productsList = JSON.parse(readProducts);
  console.log(productsList);
};

getAllProducts();
