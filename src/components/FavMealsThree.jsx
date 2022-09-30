import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardThreeContainer from "../utilities/cards/CardThreeContainer";
import { v4 as uuidv4 } from "uuid";

const FavMealsThree = ({ filteredCombos }) => {
  const navigate = useNavigate();
  const { width, height } = useWindowDimensions();
  return (
    <div
      className={`1400:grid flex gap-2 grid-cols-2 flex-wrap w-full px-6 500:px-10 overflow-scroll 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
    >
      {filteredCombos?.map((combo) => (
        <CardThreeContainer key={uuidv4()} combo={combo} />
      ))}
      <div
        onClick={() => navigate("/creation/mealTitle")}
        className={`absolute  ${
          height > 600 && width > 767 ? "top-[88%]" : "top-[78%]"
        } left-[74%] 600:left-[84%] btnPrimaryCol buttonShadow hover:bg-[#293D2B] w-14 h-14 600:w-20 600:h-20 z-30 rounded-full ${
          styles.flexCenter
        } z-[80] cursor-pointer`}
      >
        <FaPlus
          size={width > 600 ? "25px" : "20px"}
          className="text-lightTextCol"
        />
      </div>
      {/* puffer */}
      <div className="h-24 600:h-28 w-full"></div>
    </div>
  );
};

export default FavMealsThree;
