import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';

const generateProducts = async (number) => {
  const readProducts = await fs.readFile(PATH_DB, 'utf-8');
  const productsList = JSON.parse(readProducts);

  const newProducts = Array(number).fill(0).map(createFakeProduct);

  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...productsList, ...newProducts], null, 2),
    'utf-8',
  );
};

generateProducts(3);
