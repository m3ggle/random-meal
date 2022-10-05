const mealReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STORED_MEAL_IDS":
      return {
        ...state,
        allMealIds: [...state.allMealIds, ...action.payload],
      };
    // ! has to change
    case "UPDATE_MEALS":
      return {
        ...state,
          meals: { ...state.meals, ...action.payload },
      };
    default:
      break;
  }
};

export default mealReducer;
