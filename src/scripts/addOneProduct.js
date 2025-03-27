import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';

const addOneProduct = async () => {
  const readProducts = await fs.readFile(PATH_DB, 'utf-8');
  const productsList = JSON.parse(readProducts);

  const newProduct = createFakeProduct();

  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...productsList, newProduct], null, 2),
    'utf-8',
  );
};

addOneProduct();
