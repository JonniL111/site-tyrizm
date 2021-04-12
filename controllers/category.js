import { db } from '../firebase/index.js';

export const getCategorys = (req, res) => {
  const categorys = db.ref('categorys');
  categorys.once('value', (categorys) => {
    res.json(categorys.val());
  });
};