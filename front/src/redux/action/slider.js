import { sliders } from '../../api';

import { GET_SLIDERS } from '../variables.js';

export const addSliders = (sliders) => ({
  type: GET_SLIDERS,
  payload: sliders,
});

export const fetchSlides = () => (dispatch, getState) => {
  const { mainSlider } = getState();
  sliders
    .getSliders()
    .then((res) => {
      if (JSON.stringify(res.data.slides) !== JSON.stringify(mainSlider.slides)) {
        dispatch(addSliders(res.data.slides));
      }
    })
    .catch((error) => console.log(`Fetch products error - ${error}`));
};
