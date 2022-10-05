import { createContext, useContext, useReducer } from "react";
import pagenationReducer from "./PagenationReducer";

const PagenationContext = createContext();
PagenationContext.displayName = "PagenationContext";

export function usePagenationContext() {
  return useContext(PagenationContext);
}

export const PagenationProvider = ({ children }) => {
  const initialState = {
    pagenation: {
      favMealsStartAfter: {
        // like the name says, it is a copy of favMeals (if favMeals changes this state will not be effected)
        favMealsRemaining: [],
        // storing all favMeals which are already in the mealContext
        storingFavMeals: [],
      },
      favCombosStartAfter: 0,
      CombosStartAfter: 0,
      singleMealsStartAfter: {
        lastVisible: 0,
        querySnapshot: 0,
      },
    },
  };

  const [state, dispatchPagenation] = useReducer(
    pagenationReducer,
    initialState
  );

  return (
    <PagenationContext.Provider value={{ ...state, dispatchPagenation }}>
      {children}
    </PagenationContext.Provider>
  );
};
