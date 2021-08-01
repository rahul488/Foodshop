import { add_To_cart, remove_From_cart } from "../Constants/Constants";

export const addToCart = (item) => {
  return {
    type: add_To_cart,
    payload: item,
  };
};
export const removeToCart = (item) => {
  return {
    type: remove_From_cart,
    payload: item,
  };
};
