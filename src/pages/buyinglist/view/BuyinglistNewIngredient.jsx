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
    <div className="mt-3 flex w-full flex-col gap-y-[8px]">
      <div className="flex w-full gap-x-[10px]">
        {/* ingredient */}
        <div className="flex flex-grow items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol">
          {/* icon */}
          <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
            <i className="fa-solid fa-plus text-[15px] text-inputCol"></i>
          </div>
          {/* text */}
          <input
            type="text"
            value={newIngredient.ingredient.text}
            onChange={(e) => handleInputChange(e, "ingredient")}
            className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
            placeholder="Add a new Ingredient..."
          />
        </div>
        {/* amount */}
        <div className="flex w-3/12 items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol sm:w-2/12">
          {/* icon */}
          <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
            <i className="fa-solid fa-ruler text-[15px] text-inputCol"></i>
          </div>
          {/* text */}
          <input
            type="number"
            value={newIngredient.amount.text}
            onChange={(e) => handleInputChange(e, "amount")}
            className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
            placeholder="52"
          />
        </div>
        {/* unit */}
        <div className="flex w-3/12 items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol sm:w-2/12">
          {/* icon */}
          <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
            <i className="fa-solid fa-ruler-combined text-[15px] text-inputCol"></i>
          </div>
          {/* text */}
          <input
            type="text"
            value={newIngredient.unit.text}
            onChange={(e) => handleInputChange(e, "unit")}
            className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputPlaceholderCol`}
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
          className={`min-h-[46px] min-w-[50px] rounded-xl ${
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
        className={`${styles.flexCenter} btnPrimaryCol h-[46px] w-full rounded-xl bg-slate-600 py-[10px] text-[14px] font-semibold text-lightTextCol hover:bg-[#293D2B]`}
      >
        Export your Shopping List
      </button>
    </div>
  );
};

export default BuyinglistNewIngredient;
