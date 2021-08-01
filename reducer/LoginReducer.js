import { is_Logged_in, is_Logged_out } from "../Constants/Constants";

const initialState = {
  isLoggedin: false,
};

const isLogin = (state = initialState, action) => {
  switch (action.type) {
    case is_Logged_in: {
      state.isLoggedin = true;
      return state;
    }
    case is_Logged_out: {
      state.isLoggedin = false;
      return state;
    }
    default:
      return state;
  }
};

export default isLogin;
