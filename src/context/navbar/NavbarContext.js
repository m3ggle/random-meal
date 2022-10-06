import { createContext, useContext, useReducer } from "react";
import navbarReducer from "./NavbarReducer";

const NavbarContext = createContext();
NavbarContext.displayName = "NavbarContext";

export function useNavbarContext() {
  return useContext(NavbarContext);
}

export const NavbarProvider = ({ children }) => {
  const initialState = {
    navbarStatus: true,
  };

  const [state, dispatchNavbar] = useReducer(navbarReducer, initialState);

  return (
    <NavbarContext.Provider value={{ ...state, dispatchNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
