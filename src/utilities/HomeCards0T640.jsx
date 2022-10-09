import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/Loading";
import styles from "../styles";
import Card0T640 from "./cards/Card0T640";

/* 0-640px */

const HomeCards0T640 = ({ meals, data, callbackButton, callbackBuy }) => {
  const handleToastMsg = () => {
    toast.info("😊 This Feature is coming in soon");
  };

  // if check meals[data[0]]... in mealContext, if not then get them from firestore

  return (
    <div className="flex w-full max-w-[640px] flex-col items-center py-[20px] md:py-10 xl:max-w-full xl:justify-center">
      {/* meals */}

      {meals[data[0]] && meals[data[1]] && meals[data[2]] ? (
        <div className="flex w-full flex-grow flex-col items-center gap-y-[3%] xl:flex-grow-0 xl:flex-row xl:justify-center xl:gap-x-[48px]">
          {data.map((mealId) => (
            <Card0T640 key={uuidv4()} meal={meals[mealId]} />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-grow flex-col items-center gap-y-[3%] xl:flex-grow-0 xl:flex-row xl:justify-center xl:gap-x-[48px]">
          <Loading />
        </div>
      )}

      {/* Puffer */}
      <div className="h-[202px] w-full 600:h-[172px] md:hidden md:h-[132px]"></div>

      {/* button */}
      <div className="absolute bottom-[92px] z-40 flex h-[60px] w-full items-center justify-center gap-x-6 600:bottom-[120px] 600:mt-3 md:static xl:mt-8 ">
        <motion.div
          onClick={callbackBuy}
          whileTap={{ scale: 0.94 }}
          className={`h-[24px] w-[24px] ${styles.flexCenter}`}
        >
          <FaShoppingCart
            size="24px"
            className="cursor-pointer text-lightTextCol"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`rounded-xl py-4 px-4 ${styles.flexCenter} buttonShadow btnPrimaryCol cursor-pointer hover:bg-[#293D2B]`}
          onClick={callbackButton}
        >
          <p className={`${styles.heading14} text-lightTextCol`}>
            New Combination
          </p>
        </motion.div>
        <motion.div
          onClick={handleToastMsg}
          whileTap={{ scale: 0.94 }}
          className={`h-[24px] w-[24px] ${styles.flexCenter}`}
        >
          <FaHeart size="24px" className="cursor-pointer text-lightTextCol" />
        </motion.div>
      </div>
    </div>
  );
};

// 140px
export default HomeCards0T640;
