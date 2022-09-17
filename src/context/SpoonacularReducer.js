const spoonacularReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFORMATION":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return "";
  }
};

export default spoonacularReducer;
