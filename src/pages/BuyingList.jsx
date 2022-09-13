import React, { useState } from "react";
import {
  FaChevronRight,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import LunchImg from "../assets/images/lunchExample.jpg";
import styles from "../styles";
import Button from "../utilities/Buttons";

const BuyingList = () => {
  const [newIngredientText, setNewIngredientText] = useState("")
  const [buyinglistIngredients, setBuyinglistIngredients] = useState([
    {
      title: "Sit at neque, mattis nunc, ut bibendum",
      ingredients: [
        "Semper mi praesent",
        "Lacus sed pulvinar curabitur ut pulvinar massa",
        "Scelerisque mollis fringilla",
        "Id massa cursus adipiscing",
        "Vitae condimentum tortor posuere amet",
      ],
    },
    {
      title: "Ridiculus eros id sed ornare",
      ingredients: [
        "Semper mi praesent",
        "Lacus sed pulvinar curabitur ut pulvinar massa",
        "Scelerisque mollis fringilla",
        "Id massa cursus adipiscing",
        "Vitae condimentum tortor posuere amet",
      ],
    },
    {
      title: "Others",
      ingredients: [
        "Sed elementum elementum",
        "Mattis imperdiet",
        "Blandit aenean rhoncus",
        "Ridiculus eros id sed ornare.",
        "Nulla ut amet pellentesque",
      ],
    },
  ]);

  const handleAdd = () => {
    console.log('hallo')
    let copyIngredients = buyinglistIngredients;
    copyIngredients[copyIngredients.length - 1].ingredients.push(newIngredientText)
    setBuyinglistIngredients(() => [...copyIngredients]);
  };

  const handleDelete = (idIngredient, idMeal, type) => {
    let copyIngredients = buyinglistIngredients
    type === "ingredient"
      ? copyIngredients[idMeal].ingredients.splice(idIngredient, 1)
      : copyIngredients.splice(idMeal, 1);
    setBuyinglistIngredients(() => [...copyIngredients]);
  }

  return (
    <div className="w-full h-screen flex">
      <div className="relative w-full md:max-w-[534px] lg:max-w-[600px] h-screen overflow-scroll bg-bgPrimaryCol pt-10 pb-28 md:pb-10  flex flex-col">
        <div className="flex flex-col">
          {/* titel */}
          <div className="w-full text-center">
            <p className={`${styles.heading32} text-lightTextCol`}>
              Your Buyinglist
            </p>
          </div>
          {/* cards */}
          <div className="flex flex-col gap-y-4 p-5 overflow-auto">
            {buyinglistIngredients.map((meal, index1) => (
              <div
                key={index1}
                className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol rounded-[20px] buyinglistMealShadow"
              >
                {/* mealname */}
                <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol">
                  <p className={`${styles.paragraph16}`}>{meal.title}</p>
                  <div
                    onClick={() => handleDelete("", index1, "meal")}
                    className="w-12 flex items-center justify-center cursor-pointer"
                  >
                    <FaTimes size="14px" />
                  </div>
                </div>
                {/* meals */}
                <div className="flex flex-col pl-6 gap-[5px]">
                  {meal.ingredients.map((ingredient, index2) => (
                    <div
                      key={index2}
                      className="flex items-center justify-between text-lightTextCol"
                    >
                      <p className={`${styles.paragraph14}`}>{ingredient}</p>
                      <div
                        id={index2}
                        value="smt"
                        onClick={() =>
                          handleDelete(index2, index1, "ingredient")
                        }
                        className="w-12 flex items-center justify-center cursor-pointer"
                      >
                        <FaTimes size="12px" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col gap-y-[8px] mt-3">
              {/* Label */}
              <label className={`text-inputCol ${styles.paragraph14} hidden`}>
                Search
              </label>
              <div className="w-full flex gap-x-[10px]">
                <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                  {/* icon */}
                  <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                    <FaPlus className="text-inputCol" size="15px" />
                  </div>
                  {/* text */}
                  <input
                    type="text"
                    value={newIngredientText}
                    onChange={(e) => setNewIngredientText(e.target.value)}
                    className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                    placeholder="Add a new Ingredient..."
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol cursor-pointer hover:border-none buyinglistBtnHover`}
                >
                  <FaChevronRight size="14px" />
                </button>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
              >
                <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
                <FaExclamationCircle className="pb-[2px] text-warning hidden" />
                Please Enter The Correct Password
              </div>
              <Button text="Export your Shopping List" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex w-full h-full bg-black bg-center bg-cover"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
        <div className="w-full h-full buyinglistImgGradient"></div>
      </div>
    </div>
  );
};

export default BuyingList;
