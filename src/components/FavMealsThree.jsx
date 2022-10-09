import { motion } from "framer-motion";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardThreeContainer from "../utilities/cards/CardThreeContainer";

const FavMealsThree = ({ filteredCombos }) => {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  return (
    <div
      className={`flex w-full max-w-[1350px] grid-cols-2 flex-wrap justify-center gap-2 overflow-scroll px-6 300:gap-5 500:px-10 600:gap-6 1400:grid`}
    >
      {filteredCombos?.map((combo) => (
        <CardThreeContainer key={uuidv4()} combo={combo} />
      ))}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/creation/mealtitle")}
        className={`absolute  ${
          height > 600 && width > 767 ? "top-[88%]" : "top-[78%]"
        } btnPrimaryCol buttonShadow left-[74%] z-30 h-14 w-14 rounded-full hover:bg-[#293D2B] 600:left-[84%] 600:h-20 600:w-20 ${
          styles.flexCenter
        } z-[80] cursor-pointer`}
      >
        <FaPlus
          size={width > 600 ? "25px" : "20px"}
          className="text-lightTextCol"
        />
      </motion.div>
      {/* puffer */}
      <div className="h-24 w-full 600:h-28"></div>
    </div>
  );
};

export default FavMealsThree;
