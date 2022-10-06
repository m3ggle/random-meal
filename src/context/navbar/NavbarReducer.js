const navbarReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_NAVBARSTATUS":
      return {
        ...state,
        navbarStatus: payload,
      };
    default:
      break
  }
};

export default navbarReducer;
