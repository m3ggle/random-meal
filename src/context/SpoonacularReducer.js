const spoonacularReducer = (state, action) => {
    console.log("Halllllllllooooooooo")
    console.log(action.payload)
  switch (action.type) {
      case "UPDATE_USER_INFORMATION":
          console.log("here here here")
      return {
        ...state,
        user: action.payload,
      };
    default:
      return "";
  }
};

export default spoonacularReducer;
