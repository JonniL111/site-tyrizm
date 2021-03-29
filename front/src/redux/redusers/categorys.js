import produce from "immer"
import { GET_CATEGORYS } from "../variables";

const initialState = [];

export const categorys = produce((draft, action) =>{
  switch (action.type) {
    case GET_CATEGORYS:
      draft.push(...action.payload)
      break;
  
    default:
      break;
  }
}, initialState)