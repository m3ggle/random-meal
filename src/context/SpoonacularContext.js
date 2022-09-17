import { createContext, useReducer } from "react";
import spoonacularReducer from "./SpoonacularReducer";

const SpoonacularContext = createContext();

export const SpoonacularProvider = ({ children }) => {
  const initialState = {
    user: {},
    favoriteMeals: [],
    spoonacularResult: [],
    loading: false,
    errorMsg: "",
    test: "Hallo Context",
  };

  const [state, dispatch] = useReducer(spoonacularReducer, initialState);

  return (
    <SpoonacularContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SpoonacularContext.Provider>
  );
};

export default SpoonacularContext;
