import { createContext, useContext, useReducer } from "react";
import comboReducer from "./ComboReducer";

const ComboContext = createContext();
ComboContext.displayName = "ComboContext"

export function useComboContext() {
  return useContext(ComboContext);
}

export const ComboProvider = ({ children }) => {
    const initialState = {
        combos: {},
        allComboIds: [],
        
  };

  const [state, dispatchCombo] = useReducer(comboReducer, initialState);

  return (
    <ComboContext.Provider value={{ ...state, dispatchCombo }}>
      {children}
    </ComboContext.Provider>
  );
};
