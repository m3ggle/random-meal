const userReducer = (state, action) => {
  const { type, payload} = action
  switch (type) {
    case "UPDATE_USER_INFORMATION":
      return {
        ...state,
        user: payload,
      };
    // why only favcombos and favmeals nowwhere to be found
    case "UPDATE_FAVCOMBOS": 
      return {
        ...state,
        user: {
          ...state.user,
          favCombos: [...payload]
        }
      }
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
