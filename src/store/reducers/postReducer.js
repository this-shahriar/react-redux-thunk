const initial = { allPosts: [], raw: [], processed: [] };

export const postReducer = (state = initial, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        allPosts: action?.value,
      };
    case "DELETE":
      return {
        ...state,
        allPosts: state.allPosts?.filter((item) => item?.id !== action.value),
      };
    default:
      return state;
  }
};
