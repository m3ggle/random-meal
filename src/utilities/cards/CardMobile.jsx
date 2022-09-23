import { motion } from "framer-motion";
import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import DinnerImg from "../../assets/images/dinnerExample.jpg";

const CardMobile = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/mealdetails/123`)}
      className="w-[122px] h-[167px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
      style={{ backgroundImage: `url(${DinnerImg})` }}
    >
      {/* name and tag */}
      <div className="w-[109px] bg-lightTextCol rounded-xl absolute top-[72%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
        <p className={`text-[10px] font-semibold whitespace-nowrap truncate`}>
          Egestas nec commodo...
        </p>
      </div>

      {/* icons */}
      <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[6%] left-[80%]">
        <FaHeart
          size="15px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaShoppingCart
          size="15px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
        <FaLock
          size="15px"
          className="text-iconTransCol drop-shadow-cardIcon"
        />
      </div>
    </motion.div>
  );
};

export default CardMobile;
