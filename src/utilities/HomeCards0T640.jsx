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
    <div className="w-full max-w-[640px] xl:max-w-full flex items-center xl:justify-center flex-col py-[20px] md:py-10">
      {/* meals */}

      {meals[data[0]] && meals[data[1]] && meals[data[2]] ? (
        <div className="w-full flex flex-col xl:flex-row flex-grow xl:flex-grow-0 items-center xl:justify-center gap-y-[3%] xl:gap-x-[48px]">
          {data.map((mealId) => (
            <Card0T640 key={uuidv4()} meal={meals[mealId]} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col xl:flex-row flex-grow xl:flex-grow-0 items-center xl:justify-center gap-y-[3%] xl:gap-x-[48px]">
          <Loading />
        </div>
      )}

      {/* Puffer */}
      <div className="w-full h-[202px] 600:h-[172px] md:h-[132px] md:hidden"></div>

      {/* button */}
      <div className="w-full h-[60px] flex justify-center items-center gap-x-6 z-40 600:mt-3 xl:mt-8 absolute bottom-[92px] 600:bottom-[120px] md:static ">
        <motion.div
          onClick={callbackBuy}
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
          onClick={handleToastMsg}
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
