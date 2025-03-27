import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProduct = async (data) => {
  fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
};
