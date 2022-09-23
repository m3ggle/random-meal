import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";
import Card0T640 from "./cards/Card0T640";

/* 0-640px */

const HomeCards0T640 = ({ data, callbackButton }) => {
  return (
    <div className="w-full max-w-[640px] flex items-center flex-col xl:hidden 500:gap-y-[10px] 500:py-[20px]">
      {/* meals */}
      {data.map((mealCard) => (
        <Card0T640
          key={mealCard.mealinformation.id}
          id={mealCard.mealinformation.id}
          title={mealCard.mealinformation.title}
          image={mealCard.mealinformation.image}
          fullMealInfo={mealCard}
        />
      ))}

      {/* button */}
      <div className="w-full h-[14%] 500:h-[60px] flex justify-center items-center gap-x-[24px] z-40 600:mt-[12px]">
        <motion.div
          whileTap={{ scale: 0.94 }}
          className={`w-[24px] h-[24px] ${styles.flexCenter}`}
        >
          <FaShoppingCart
            size="24px"
            className="text-lightTextCol cursor-pointer"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`py-4 px-4 rounded-xl ${styles.flexCenter} buttonShadow btnPrimaryCol hover:bg-[#293D2B] cursor-pointer`}
          onClick={callbackButton}
        >
          <p className={`${styles.heading14} text-lightTextCol`}>
            New Combination
          </p>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.94 }}
          className={`w-[24px] h-[24px] ${styles.flexCenter}`}
        >
          <FaHeart size="24px" className="text-lightTextCol cursor-pointer" />
        </motion.div>
      </div>
    </div>
  );
};

// 140px
export default HomeCards0T640;
