import Axios from "axios";

export const getAllPosts = () => {
  return async (dispatch) => {
    const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: "FETCH", value: res?.data });
  };
};

export const delData = (value) => {
  return (dispatch) => dispatch({ type: "DELETE", value: value });
};
