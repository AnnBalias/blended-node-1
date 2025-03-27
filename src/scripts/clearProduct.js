import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const clearProduct = async () => {
  await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
};

clearProduct();
