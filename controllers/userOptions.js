import { db } from '../firebase/index.js';

export const getOptions = (req, res) => {
  const options = db.ref('options');
  options.once('value', (options) => res.json(options.val()));
};