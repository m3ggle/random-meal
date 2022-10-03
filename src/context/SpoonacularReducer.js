const spoonacularReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER_INFORMATION_INIT":
      return {
        ...state,
        user: action.payload,
        buyinglist: action.payload.buyinglist,
      };
    case "UPDATE_USER_INFORMATION":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_RANDOM_MEALS":
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
      };
    case "UPDATE_FAVMEALS":
      return {
        ...state,
        favMeals: action.payload,
      };
    case "UPDATE_FAVMEALS_AND_FAVORITEMEALS":
      return {
        ...state,
        favMeals: action.payload.favMeals,
        favoriteMeals: action.payload.favoriteMeals,
      };
    case "UPDATE_FAVCOMBOS":
      return {
        ...state,
        favCombos: action.payload,
      };
    case "UPDATE_MEALS":
      return {
        ...state,
        meals: { ...state.meals, ...action.payload },
      };
    case "UPDATE_COMBOS":
      return {
        ...state,
        combos: action.payload
      };
    case "UPDATE_MEALS_AND_COMBOS":
      return {
        ...state,
        meals: { ...state.meals, ...action.payload.meals },
        combos: { ...state.combos, ...action.payload.combos },
      };
    case "UPDATE_CREATION": 
      return {
        ...state,
        creation: {...action.payload}
      }
    case "UPDATE_NAVBARSTATUS": 
      return {
        ...state,
        navbarStatus: action.payload
      }
    default:
      return "";
  }
};

export default spoonacularReducer;
