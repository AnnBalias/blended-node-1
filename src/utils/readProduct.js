import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProduct = async () => {
  const readData = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(readData);
};
