import { db } from '../firebase/index.js';

export const getFilters = (req, res) => {
  const filters = db.ref('filters');
  filters.once('value', (filters) => {
    res.json(filters.val());
  });
};