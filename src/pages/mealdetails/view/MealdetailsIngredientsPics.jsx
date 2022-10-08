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
      className="flex flex-col max-w-20 items-center gap-1"
    >
      <div
        className="w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
        style={{
          backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingImage})`,
        }}
      >
        <div
          className={`w-full h-full rounded-full bg-[#28293380] opacity-0 hover:opacity-100 cursor-pointer ${styles.flexCenter}`}
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
          className={`${styles.paragraph14} text-lightTextCol w-20 text-center`}
        >
          {ing.measures.amount.toFixed(1) + " " + ing.measures.unitShort}
        </p>
        <p
          className={`${styles.paragraph14} text-lightTextCol w-20 text-center leading-4`}
        >
          {ing.name}
        </p>
      </div>
    </div>
  );
}

export default MealdetailsIngredientsPics;
