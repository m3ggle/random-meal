import React, { useState } from "react";
import styles from "../styles";
import { motion } from "framer-motion";

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
        className={`${styles.flexCenter} w-[120px] h-6 border-b-2 ${
          selectedCount !== "first" && "border-[#626476]"
        } cursor-pointer`}
      >
        <p
          className={`text-[16px] ${
            selectedCount === "first"
              ? "text-lightTextCol font-semibold"
              : "text-[#626476] font-normal"
          }`}
        >
          {firstChoice}
        </p>
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => handleClick("second")}
        className={`${styles.flexCenter} w-[120px] h-6 border-b-2 ${
          selectedCount !== "second" && "border-[#626476]"
        } cursor-pointer`}
      >
        <p
          className={`text-[16px] ${
            selectedCount === "second"
              ? "text-lightTextCol font-semibold"
              : "text-[#626476] font-normal"
          }`}
        >
          {secondChoice}
        </p>
      </motion.div>
    </div>
  );
};

export default TwoChoice;
