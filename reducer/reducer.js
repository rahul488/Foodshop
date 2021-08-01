import {
  add_To_cart,
  after_Login,
  after_Logout,
  remove_From_cart,
} from "../Constants/Constants";

const initialState = {
  count: 0,
  item: [],
};

const addProduct = (state = initialState, action) => {
  switch (action.type) {
    case add_To_cart: {
      state.count = state.count + 1;
      state.item = [...state.item, action.payload];
      return state;
    }
    case remove_From_cart: {
      state.count = state.count - 1;
      state.item = state.item.filter((product, index) => {
        return index !== action.payload;
      });
      return state;
    }
    case after_Logout: {
      state.count = 0;
      state.item = [];

      return state;
    }
    case after_Login: {
      state.count = action.payload.length;
      state.item = action.payload;
      return state;
    }
    default:
      return state;
  }
};
export default addProduct;
