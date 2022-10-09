import { motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styles from "../../../styles";
import { useAddAndRemove } from "../helper/useAddAndRemove";

const BuyinglistNewIngredient = () => {
  const { handleAdd } = useAddAndRemove();

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

  const handleToastMsg = () => {
    toast.info("😊 This Feature is coming in soon");
  };

  return (
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
          whileTap={newIngredient.correctness ? { scale: 0.98 } : { scale: 1 }}
          type="button"
          onClick={() => handleAdd(newIngredient)}
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
      <button
        onClick={handleToastMsg}
        type="Button"
        className={`${styles.flexCenter} w-full bg-slate-600 py-[10px] h-[46px] rounded-xl text-lightTextCol font-semibold text-[14px] btnPrimaryCol hover:bg-[#293D2B]`}
      >
        Export your Shopping List
      </button>
    </div>
  );
};

export default BuyinglistNewIngredient;
