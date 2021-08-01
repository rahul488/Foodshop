import { user_name } from "../Constants/Constants";

const initialState = {
  userName: "Guest",
};

const getUsername = (state = initialState, action) => {
  switch (action.type) {
    case user_name: {
      state.userName = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default getUsername;
