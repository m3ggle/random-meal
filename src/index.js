import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuyinglistProvider } from "./context/buyinglist/buyinglistContext";
import { ComboProvider } from "./context/combos/ComboContext";
import { MealProvider } from "./context/meals/MealContext";
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
            <App />
            </PagenationProvider>
          </BuyinglistProvider>
        </ComboProvider>
      </MealProvider>
    </UserProvider>
  </React.StrictMode>
);
