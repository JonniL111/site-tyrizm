import produce from 'immer';
import { GET_SLIDERS } from '../variables.js';

const initialState = {
  slides: [],
  isLoaded: false,
};

export const mainSlider = produce((draft, action) => {
  switch (action.type) {
    case GET_SLIDERS:
      draft.slides.push(...action.payload);
      draft.isLoaded = true
      break;

    default:
      break;
  }
}, initialState);
