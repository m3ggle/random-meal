import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles";
import MealdetailsIngredientsPics from "./MealdetailsIngredientsPics";

const MealdetailsIngredients = ({ specificBuyinglist, onIngredientClick }) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <p className={`${styles.heading24} text-lightTextCol`}>Ingredients</p>
      {/* ingredients pics */}
      <div className="max-w-[540px] w-full flex flex-wrap gap-2">
        {specificBuyinglist?.map((ing, index) => {
          return (
            <MealdetailsIngredientsPics
              key={uuidv4()}
              ing={ing}
              index={index}
              ingImage={ing.image}
              onIngredientClick={onIngredientClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MealdetailsIngredients;
