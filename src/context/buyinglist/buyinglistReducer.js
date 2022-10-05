const buyinglistReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_BUYINGLIST":
      return {
        ...state,
        buyinglist: payload,
      };
    default:
      break;
  }
};

export default buyinglistReducer;
