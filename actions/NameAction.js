import { user_name } from "../Constants/Constants";

export const userName = (name) => {
  return {
    type: user_name,
    payload: name,
  };
};
