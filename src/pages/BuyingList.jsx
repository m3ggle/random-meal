import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import LunchImg from "../assets/images/lunchExample.jpg";
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import styles from "../styles";
import Button from "../utilities/Buttons";

const BuyingList = () => {
  // Todo: clean up fromData mess
  const { buyinglist, dispatch } = useContext(SpoonacularContext);

  const [newIngredient, setNewIngredient] = useState({
    ingredient: {
      text: "",
      correctness: false,
      errorMsg: "Ingredient Name has to at least 2 characters long",
    },
    amount: {
      text: 0,
      correctness: false,
      errorMsg: "Amount has to be only Numbers",
    },
    unit: {
      text: "",
      correctness: false,
      errorMsg: "Unit has to be at least more than one Character",
    },
    errorMsg: "",
    correctness: false,
  });
  const handleInputChange = (e, proprety) => {
    let tempCorrectness = false;
    let tempErrorMsg = "";
    if (proprety === "ingredient") {
      tempCorrectness = e.target.value.length >= 2;
      tempErrorMsg = newIngredient[proprety].errorMsg;
    } else if (proprety === "amount") {
      const reg = new RegExp("^[0-9]+$");
      tempCorrectness = reg.test(e.target.value);
      tempErrorMsg = newIngredient[proprety].errorMsg;
    } else if (proprety === "unit") {
      tempCorrectness = e.target.value.length >= 1;
      tempErrorMsg = newIngredient[proprety].errorMsg;
    }

    setNewIngredient((prevState) => ({
      ...prevState,
      [proprety]: {
        text: e.target.value,
        correctness: tempCorrectness,
        errorMsg: prevState[proprety].errorMsg,
      },
      errorMsg: tempCorrectness ? false : tempErrorMsg,
      correctness:
        prevState.ingredient.correctness &&
        prevState.amount.correctness &&
        prevState.unit.correctness &&
        tempCorrectness,
    }));
  };

  // buyinglist
  const uploadUpdate = async (buyinglist) => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          {
            buyinglist: buyinglist,
          },
          { merge: true }
        );
      } else {
        toast.error("😤 Not logged in");
      }
    } catch (error) {
      toast.error("🍅 Could not upload the Update");
    }
  };

  const handleAdd = (ingName, ingAmount, ingUnit) => {
    let created = false;
    const ingredientObj = {
      name: ingName,
      amount: parseInt(ingAmount),
      unitShort: ingUnit,
    };
    if (newIngredient.correctness) {
      if (buyinglist.length <= 5) {
        buyinglist.some((meal, index) => {
          if (meal["Others"]) {
            // others exist
            buyinglist[index][Object.keys(meal)].push(ingredientObj);
            created = true;
          }
        });
        if (!created) {
          buyinglist.push({
            Others: [ingredientObj],
          });
          created = true;
        }
      } else {
        toast.info(
          "🍓 You reached the maximum number of Meals in your Buyinglist"
        );
      }
    }

    if (created) {
      dispatch({ type: "UPDATE_BUYINGLIST", payload: buyinglist });
      uploadUpdate(buyinglist);
      // setNewIngredient((prevState) => ({
      //   ...prevState,
      //   ingredient: { ...prevState.ingredient, text: "", correctness: false },
      //   amount: { ...prevState.amount, text: "", correctness: false },
      //   unit: { ...prevState.unit, text: "", correctness: false },
      // }));
    }
  };

  const handleDelete = ({ mealName, ingredientName }) => {
    let updatedMeal;
    const newBuyinglist = buyinglist.filter((meal) => {
      if (Object.keys(meal)[0] === mealName) {
        if (ingredientName !== undefined) {
          // delete ingredient
          let ings = meal[Object.keys(meal)[0]].filter((ingredient) => {
            if (ingredient.name === ingredientName) {
              return false;
            } else if (ingredient.name !== ingredientName) {
              return true;
            }
          });
          updatedMeal = { [Object.keys(meal)[0]]: [...ings] };
          return false;
        } else if (ingredientName === undefined) {
          // delete meal
          return false;
        }
      } else {
        return true;
      }
    });
    if (ingredientName !== undefined) {
      newBuyinglist.push(updatedMeal);
    }

    dispatch({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
    uploadUpdate(newBuyinglist);
  };

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
            {buyinglist.map((meal) => (
              <div
                key={uuidv4()}
                className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol rounded-[20px] buyinglistMealShadow"
              >
                {/* mealname */}
                <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol">
                  <p className={`${styles.paragraph16}`}>
                    {Object.keys(meal)[0]}
                  </p>
                  <div
                    onClick={() =>
                      handleDelete({ mealName: Object.keys(meal)[0] })
                    }
                    className="w-12 flex items-center justify-center cursor-pointer"
                  >
                    <FaTimes size="14px" />
                  </div>
                </div>
                <div className="flex flex-col pl-6 gap-[5px]">
                  {meal[Object.keys(meal)[0]].map((ingredient) => (
                    <div
                      key={uuidv4()}
                      className="flex items-center justify-between text-lightTextCol"
                    >
                      <div
                        className={`w-full ${styles.paragraph14} flex flex-wrap gap-x-2`}
                      >
                        <p className={`${styles.paragraph14} w-8/12`}>
                          {ingredient.name}
                        </p>
                        <p className={`${styles.paragraph14}`}>
                          {ingredient.amount.toFixed(1)}
                          {ingredient.unitShort}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        value="smt"
                        onClick={() =>
                          handleDelete({
                            mealName: Object.keys(meal)[0],
                            ingredientName: ingredient.name,
                          })
                        }
                        className="w-12 flex items-center justify-center cursor-pointer"
                      >
                        <FaTimes size="12px" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="w-full flex flex-col gap-y-[8px] mt-3">
              <div className="w-full flex gap-x-[10px]">
                {/* ingredient */}
                <div className="text-inputCol flex-grow border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                  {/* icon */}
                  <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                    <i className="fa-solid fa-plus text-[15px] text-inputCol"></i>
                  </div>
                  {/* text */}
                  <input
                    type="text"
                    value={newIngredient.ingredient.text}
                    onChange={(e) => handleInputChange(e, "ingredient")}
                    className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                    placeholder="Add a new Ingredient..."
                  />
                </div>
                {/* amount */}
                <div className="text-inputCol w-3/12 sm:w-2/12 border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                  {/* icon */}
                  <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                    <i className="fa-solid fa-ruler text-[15px] text-inputCol"></i>
                  </div>
                  {/* text */}
                  <input
                    type="number"
                    value={newIngredient.amount.text}
                    onChange={(e) => handleInputChange(e, "amount")}
                    className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                    placeholder="52"
                  />
                </div>
                {/* unit */}
                <div className="text-inputCol w-3/12 sm:w-2/12 border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
                  {/* icon */}
                  <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                    <i className="fa-solid fa-ruler-combined text-[15px] text-inputCol"></i>
                  </div>
                  {/* text */}
                  <input
                    type="text"
                    value={newIngredient.unit.text}
                    onChange={(e) => handleInputChange(e, "unit")}
                    className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
                    placeholder="unit"
                  />
                </div>
                <motion.button
                  whileHover={
                    newIngredient.correctness ? { scale: 1.02 } : { scale: 1 }
                  }
                  whileTap={
                    newIngredient.correctness ? { scale: 0.98 } : { scale: 1 }
                  }
                  type="button"
                  onClick={() =>
                    handleAdd(
                      newIngredient.ingredient.text,
                      newIngredient.amount.text,
                      newIngredient.unit.text
                    )
                  }
                  className={`min-w-[50px] min-h-[46px] rounded-xl ${
                    styles.flexCenter
                  } text-lightTextCol ${
                    newIngredient.correctness
                      ? "btnPrimaryCol cursor-pointer"
                      : "cursor-default border-[1px]"
                  }`}
                >
                  <i className="fa-solid fa-chevron-right text-[15px] text-inputCol"></i>
                </motion.button>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} ${
                  newIngredient.errorMsg ? "flex" : "hidden"
                } items-center gap-x-1`}
              >
                <i className="fa-solid fa-circle-info"></i>
                {newIngredient.errorMsg}
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
