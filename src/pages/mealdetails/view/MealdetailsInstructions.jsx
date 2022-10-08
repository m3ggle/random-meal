import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles";

const MealdetailsInstructions = ({ instructions }) => {
  const { steps } = instructions;
  return (
    <div className="w-full flex flex-col gap-y-2">
      <p className={`${styles.heading24} text-lightTextCol`}>How it's done</p>
      {/* Steps */}
      <div className="flex lg:grid grid-cols-2 flex-col gap-3">
        {steps.map((instruction, index) => (
          <div
            key={uuidv4()}
            className="w-full max-w-[540px] flex flex-col buyinglistMealShadow p-[24px] gap-y-4 rounded-xl"
          >
            {/* txt */}
            <p className={`${styles.paragraph16} text-lightTextCol`}>
              <span className={`text-[24px]`}>{instruction.number}.</span>{" "}
              {instruction.step}
            </p>
            {/* Equipment and Ingredients */}
            <div className="w-full flex flex-wrap gap-4">
              {/* Equipment */}
              {instruction.equipment.length > 0 && (
                <div className="flex flex-col gap-y-2 max-w-[168px]">
                  <p className={`${styles.paragraph14} text-lightTextCol`}>
                    Equipment
                  </p>
                  <div className="w-fit flex gap-x-2">
                    {instruction.equipment.map((equip, index) => {
                      const equipImage = equip.image;
                      return (
                        <div
                          key={uuidv4()}
                          className="relative w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
                          style={{
                            backgroundImage: `url(https://spoonacular.com/cdn/equipment_500x500/${equipImage})`,
                          }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* ingredients */}
              {instruction.ingredients.length > 0 && (
                <div className="flex flex-col gap-y-2">
                  <p className={`${styles.paragraph14} text-lightTextCol`}>
                    Ingredients
                  </p>
                  <div className="w-fit flex flex-wrap gap-2">
                    {instruction.ingredients.map((ingredient, index) => {
                      const ingredientImage = ingredient.image;
                      return (
                        <div
                          key={uuidv4()}
                          className="w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
                          style={{
                            backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingredientImage})`,
                          }}
                        >
                          <div
                            className={`w-full h-full rounded-full bg-[#28293380] opacity-0 hover:opacity-100 cursor-pointer ${styles.flexCenter}`}
                          >
                            <FaShoppingCart
                              size="30%"
                              className="text-lightTextCol"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealdetailsInstructions;
