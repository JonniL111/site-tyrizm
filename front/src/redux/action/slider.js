import { GET_SLIDERS } from '../variables.js';

export const addSliders = (sliders) => ({
  type: GET_SLIDERS,
  payload: sliders,
});

export const fetchSlides = ({ db, url }) => (dispatch, getState) => {
  const { mainSlider } = getState();
  const slider = db.ref(url);
  slider.on('value', (elem) => {
    if (JSON.stringify(elem.val().slides) !== JSON.stringify(mainSlider.slides)) {
      dispatch(addSliders(elem.val().slides));
    }
  });
};
