import React from "react";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles";

function MealdetailsIngredientsPics({
  ing,
  index,
  ingImage,
  onIngredientClick,
}) {
  return (
    <div
      key={uuidv4()}
      id={ing.id}
      onClick={() =>
        onIngredientClick({
          ingId: ing.id,
          ingName: ing.name,
          ingAmount: ing.measures.amount,
          ingUnit: ing.measures.unitShort,
          ing,
          ingIndex: index,
        })
      }
      className="max-w-20 flex flex-col items-center gap-1"
    >
      <div
        className="h-20 w-20 overflow-hidden rounded-full bg-gray-400 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingImage})`,
        }}
      >
        <div
          className={`h-full w-full cursor-pointer rounded-full bg-[#28293380] opacity-0 hover:opacity-100 ${styles.flexCenter}`}
        >
          {ing.inShoppingCart ? (
            <FaCheck size="30%" className="text-lightTextCol" />
          ) : (
            <FaShoppingCart size="30%" className="text-lightTextCol" />
          )}
        </div>
        <p>{ing.id * index}</p>
      </div>
      <div className="flex flex-col gap-y-0">
        <p
          className={`${styles.paragraph14} w-20 text-center text-lightTextCol`}
        >
          {ing.measures.amount.toFixed(1) + " " + ing.measures.unitShort}
        </p>
        <p
          className={`${styles.paragraph14} w-20 text-center leading-4 text-lightTextCol`}
        >
          {ing.name}
        </p>
      </div>
    </div>
  );
}

export default MealdetailsIngredientsPics;
