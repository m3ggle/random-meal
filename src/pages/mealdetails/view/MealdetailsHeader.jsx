import React from "react";
import { FaShare } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import styles from "../../../styles";

const MealdetailsHeader = ({ meal }) => {
  const { title, sourceUrl, servings, healthScore, dishTypes } =
    meal.mealinformation;
  const { nutrients } = meal.nutrients;

  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="flex flex-row items-center gap-x-2"></div>
      <p
        className={`${styles.heading32} text-lightTextCol flex flex-row gap-x-2 items-center w-fit cursor-pointer`}
      >
        {title}
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          <FaShare size="25px" />
        </a>
      </p>
      {/* servings */}
      <div>
        <p className={`${styles.paragraph20} text-lightTextCol`}>
          Servings: {servings}
        </p>
        <p className={`${styles.paragraph20} text-lightTextCol`}>
          Healthscore: {healthScore}
        </p>
      </div>
      {/* tags */}
      <div className="flex flex-wrap gap-x-2">
        {dishTypes.map((type) => {
          if (
            type === "Breakfast" ||
            type === "Lunch" ||
            type === "Dinner" ||
            type === "Vegeterian" ||
            type === "Vegan"
          ) {
            return (
              <div
                key={uuidv4()}
                className={`px-4 py-1 w-fit ${
                  type === "Dinner"
                    ? "tagDinner"
                    : type === "Lunch"
                    ? "tagLunch"
                    : "tagBreakfast"
                } rounded-full ${styles.tag12}`}
              >
                {type}
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {nutrients.map((nut) => (
          <div
            key={uuidv4()}
            className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag12}`}
          >
            {nut.name}: {nut.amount.toFixed(0)}
            {nut.unit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealdetailsHeader;
