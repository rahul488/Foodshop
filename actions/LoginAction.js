import {
  after_Login,
  after_Logout,
  is_Logged_in,
  is_Logged_out,
} from "../Constants/Constants";

export const isLoggedIn = () => {
  return {
    type: is_Logged_in,
  };
};
export const isLoggedOut = () => {
  return {
    type: is_Logged_out,
  };
};
export const afterLogout = () => {
  return {
    type: after_Logout,
  };
};
export const afterLogin = (item) => {
  return {
    type: after_Login,
    payload: item,
  };
};
