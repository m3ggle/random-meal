import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuyinglistProvider } from "./context/buyinglist/buyinglistContext";
import { ComboProvider } from "./context/combos/ComboContext";
import { MealProvider } from "./context/meals/MealContext";
import { NavbarProvider } from "./context/navbar/NavbarContext";
import { PagenationProvider } from "./context/pagenation/PagenationContext";
import { UserProvider } from "./context/user/UserContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MealProvider>
        <ComboProvider>
          <BuyinglistProvider>
            <PagenationProvider>
              <NavbarProvider>
                <App />
              </NavbarProvider>
            </PagenationProvider>
          </BuyinglistProvider>
        </ComboProvider>
      </MealProvider>
    </UserProvider>
  </React.StrictMode>
);
