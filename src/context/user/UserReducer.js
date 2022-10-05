const userReducer = (state, action) => {
  const { type, payload} = action
  switch (type) {
    case "UPDATE_USER_INFORMATION":
      return {
        ...state,
        user: payload,
      };
    case "UPDATE_RANDOM_MEALS":
      return {
        ...state,
        spoonacularResult: payload,
      };
    case "UPDATE_STORED_MEAL_IDS":
      return {
        ...state,
        allMealIds: payload,
      };
    case "UPDATE_BUYINGLIST":
      return {
        ...state,
        buyinglist: payload,
      };
    case "UPDATE_FAVMEALS":
      return {
        ...state,
        favMeals: payload,
      };
    case "UPDATE_FAVMEALS_AND_FAVORITEMEALS":
      return {
        ...state,
        favMeals: payload.favMeals,
        favoriteMeals: payload.favoriteMeals,
      };
    case "UPDATE_FAVCOMBOS": 
      return {
        ...state,
        user: {
          ...state.user,
          favCombos: [...payload]
        }
      }
    case "UPDATE_COMBOS":
      return {
        ...state,
        combos: payload
      };
    case "UPDATE_MEALS_AND_COMBOS":
      return {
        ...state,
        meals: { ...state.meals, ...payload.meals },
        combos: { ...state.combos, ...payload.combos },
      };
    case "UPDATE_CREATION": 
      return {
        ...state,
        creation: {...payload}
      }
    case "UPDATE_NAVBARSTATUS": 
      return {
        ...state,
        navbarStatus: payload
      }
    // case "SINGLE_MEAL_PAGENATION": 
    //   return {
    //     ...state,

    //   }
    default:
      return "";
  }
};

export default userReducer;
