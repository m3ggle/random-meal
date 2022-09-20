const spoonacularReducer = (state, action) => {
  switch (action.type) {
      case "UPDATE_USER_INFORMATION":
          console.log("here here here")
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_RANDOM_MEALS": 
      console.log("new arrivals")
      return {
        ...state,
        spoonacularResult: action.payload,
      };
    case "UPDATE_STORED_MEAL_IDS":
      return {
        ...state,
        allMealIds: action.payload,
      };
    default:
      return "";
  }
};

export default spoonacularReducer;
