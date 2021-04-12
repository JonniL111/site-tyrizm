import { db } from '../firebase/index.js';

export const getMainSlider = (req, res) => {
  const slider = db.ref('mainslider');
  slider.once('value', (slider) => res.json(slider.val()));
};
