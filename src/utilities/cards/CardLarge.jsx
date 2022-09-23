import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BreakfastImg from "../../assets/images/breakfastExample.jpg";
import styles from "../../styles";
import { motion } from "framer-motion";

const CardLarge = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/mealdetails/123`)}
      className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
      style={{ backgroundImage: `url(${BreakfastImg})` }}
    >
      {/* name and tag */}
      <div className="w-[280px] bg-lightTextCol rounded-xl absolute top-[77%] flex flex-start px-[10px] py-3 flex-col gap-y-2 cardNameShadow">
        <p className={`${styles.paragraph20} whitespace-nowrap truncate`}>
          Egestas nec commodo...
        </p>
        <div
          className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag10}`}
        >
          Lunch
        </div>
      </div>

      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[4%] left-[86%] ">
        <FaHeart
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon cursor-pointer"
        />
        <FaShoppingCart
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon cursor-pointer"
        />
        <FaLock
          size="24px"
          className="text-iconTransCol drop-shadow-cardIcon cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default CardLarge;
