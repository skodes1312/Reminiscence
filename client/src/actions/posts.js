import * as api from "../api";

//ACTION CREATORS:-Function that returns actions

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //Action is an object that has type and payload
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
