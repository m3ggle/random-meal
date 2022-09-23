import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles";

const Card1280 = ({ id, title, image, fullMealInfo }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/mealdetails/${id}`)}
      state={fullMealInfo}
      className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* name and tag */}
      <div className="w-[280px] bg-lightTextCol rounded-xl absolute top-[77%] flex flex-start px-[10px] py-3 flex-col gap-y-2 cardNameShadow">
        <p className={`${styles.paragraph20} whitespace-nowrap truncate`}>
          {title}
        </p>
        <div
          className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag10}`}
        >
          Lunch
        </div>
      </div>

      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[4%] left-[86%] ">
        <motion.div
          whileTap={{ scale: 0.94 }}
          className={`w-[24px] h-[24px] ${styles.flexCenter}`}
        >
          <FaHeart size="24px" className="text-iconTransCol cursor-pointer" />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.94 }}
          className={`w-[24px] h-[24px] ${styles.flexCenter}`}
        >
          <FaShoppingCart
            size="24px"
            className="text-iconTransCol cursor-pointer"
          />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.94 }}
          className={`w-[24px] h-[24px] ${styles.flexCenter}`}
        >
          <FaLock size="24px" className="text-iconTransCol cursor-pointer" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card1280;
