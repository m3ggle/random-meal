import { createContext, useContext, useReducer } from "react";
import buyinglistReducer from "./buyinglistReducer";

const BuyinglistContext = createContext();
BuyinglistContext.displayName = "BuyinglistContext"

export function useBuyinglistContext() {
  return useContext(BuyinglistContext);
}

export const BuyinglistProvider = ({ children }) => {
  const initialState = {
    buyinglist: [],
  };

  const [state, dispatchBuyinglist] = useReducer(
    buyinglistReducer,
    initialState
  );

  return (
    <BuyinglistContext.Provider value={{ ...state, dispatchBuyinglist }}>
      {children}
    </BuyinglistContext.Provider>
  );
};
