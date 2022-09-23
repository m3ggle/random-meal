const spoonacularReducer = (state, action) => {
  switch (action.type) {
      case "UPDATE_USER_INFORMATION":
      return {
        ...state,
        user: action.payload,
        buyinglist: action.payload.buyinglist,
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
    case "UPDATE_BUYINGLIST": 
      return {
        ...state,
        buyinglist: action.payload,
      }
    default:
      return "";
  }
};

export default spoonacularReducer;
