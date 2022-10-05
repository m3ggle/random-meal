const comboReducer = (state, action) => {
    const {type, payload} = action
  switch (type) {
    case "UPDATE_COMBO":
      return {
        ...state,
          combos: { ...state.combos, [payload.id]: { ...payload.combo } },
          allComboIds: [...state.allComboIds, payload.id]
      };
      case "UPDATE_COMBOS":
          return {
              ...state,
              combos: { ...state.combos, ...payload}
          }
    default:
      break;
  }
};

export default comboReducer;
