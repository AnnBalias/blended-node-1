import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const countProducts = async () => {
  const readProducts = await fs.readFile(PATH_DB, 'utf-8');
  console.log(JSON.parse(readProducts).length);
};

countProducts();
