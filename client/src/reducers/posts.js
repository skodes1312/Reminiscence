//Reducer is a function which accepts state and action and,
//based on the action.type, it performs some logic (i.e. returning the state or the action)
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
