import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";
import Card1280 from "./cards/Card1280";
import { motion } from "framer-motion";

/* 1280px-...px */

const HomeCards1280 = ({ data, callbackButton }) => {
  return (
    <div
      className={`hidden xl:flex w-full h-screen items-center justify-center`}
    >
      <div className="flex flex-col gap-y-[60px] w-full">
        {/* top */}
        <div className="flex justify-center items-center gap-x-[48px] w-full">
          {data.map((mealCard) => (
            <Card1280
              key={mealCard.mealinformation.id}
              id={mealCard.mealinformation.id}
              title={mealCard.mealinformation.title}
              image={mealCard.mealinformation.image}
              fullMealInfo={mealCard}
            />
          ))}
        </div>
        {/* bottom */}
        <div className="w-full h-[14%] 500:h-[60px] flex justify-center items-center gap-x-[24px] z-40 600:mt-[12px]">
          <motion.div
            whileTap={{ scale: 0.94 }}
            className={`w-[24px] h-[24px] ${styles.flexCenter}`}
          >
            <FaShoppingCart
              size="25px"
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
            <FaHeart size="25px" className="text-lightTextCol cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeCards1280;
