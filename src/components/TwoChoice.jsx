import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "../styles";

const TwoChoice = ({ callbackTwoChoice, firstChoice, secondChoice }) => {
  const [selectedCount, setSelectedCount] = useState("first");

  const handleClick = (msg) => {
    callbackTwoChoice(msg);
    setSelectedCount(msg);
  };

  return (
    <div className={`${styles.flexCenter} mb-4`}>
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => handleClick("first")}
        className={`${styles.flexCenter} h-6 w-[120px] border-b-2 ${
          selectedCount !== "first" && "border-[#626476]"
        } cursor-pointer`}
      >
        <p
          className={`text-[16px] ${
            selectedCount === "first"
              ? "font-semibold text-lightTextCol"
              : "font-normal text-[#626476]"
          }`}
        >
          {firstChoice}
        </p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => handleClick("second")}
        className={`${styles.flexCenter} h-6 w-[120px] border-b-2 ${
          selectedCount !== "second" && "border-[#626476]"
        } cursor-pointer`}
      >
        <p
          className={`text-[16px] ${
            selectedCount === "second"
              ? "font-semibold text-lightTextCol"
              : "font-normal text-[#626476]"
          }`}
        >
          {secondChoice}
        </p>
      </motion.div>
    </div>
  );
};

export default TwoChoice;
