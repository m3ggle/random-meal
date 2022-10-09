import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles";

const MealdetailsInstructions = ({ instructions }) => {
  const { steps } = instructions;
  return (
    <div className="flex w-full flex-col gap-y-2">
      <p className={`${styles.heading24} text-lightTextCol`}>How it's done</p>
      {/* Steps */}
      <div className="flex grid-cols-2 flex-col gap-3 lg:grid">
        {steps.map((instruction, index) => (
          <div
            key={uuidv4()}
            className="buyinglistMealShadow flex w-full max-w-[540px] flex-col gap-y-4 rounded-xl p-[24px]"
          >
            {/* txt */}
            <p className={`${styles.paragraph16} text-lightTextCol`}>
              <span className={`text-[24px]`}>{instruction.number}.</span>{" "}
              {instruction.step}
            </p>
            {/* Equipment and Ingredients */}
            <div className="flex w-full flex-wrap gap-4">
              {/* Equipment */}
              {instruction.equipment.length > 0 && (
                <div className="flex max-w-[168px] flex-col gap-y-2">
                  <p className={`${styles.paragraph14} text-lightTextCol`}>
                    Equipment
                  </p>
                  <div className="flex w-fit gap-x-2">
                    {instruction.equipment.map((equip, index) => {
                      const equipImage = equip.image;
                      return (
                        <div
                          key={uuidv4()}
                          className="relative h-20 w-20 overflow-hidden rounded-full bg-gray-400 bg-cover bg-center"
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
                  <div className="flex w-fit flex-wrap gap-2">
                    {instruction.ingredients.map((ingredient, index) => {
                      const ingredientImage = ingredient.image;
                      return (
                        <div
                          key={uuidv4()}
                          className="h-20 w-20 overflow-hidden rounded-full bg-gray-400 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingredientImage})`,
                          }}
                        >
                          <div
                            className={`h-full w-full cursor-pointer rounded-full bg-[#28293380] opacity-0 hover:opacity-100 ${styles.flexCenter}`}
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
