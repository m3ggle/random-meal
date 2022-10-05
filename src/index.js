import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BuyinglistProvider } from "./context/buyinglist/buyinglistContext";
import { ComboProvider } from "./context/combos/ComboContext";
import { MealProvider } from "./context/meals/MealContext";
import { SpoonacularProvider } from "./context/SpoonacularContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SpoonacularProvider>
      <MealProvider>
        <ComboProvider>
          <BuyinglistProvider>
            <App />
          </BuyinglistProvider>
        </ComboProvider>
      </MealProvider>
    </SpoonacularProvider>
  </React.StrictMode>
);
