import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";
import Card0T640 from "./cards/Card0T640";

/* 0-640px */

const HomeCards0T640 = ({exampleData}) => {
  return (
    <div className="w-full max-w-[640px] flex items-center flex-col xl:hidden 500:gap-y-[10px] 500:py-[20px]">
      {/* meals */}
      {exampleData.map((mealCard) => (
        <Card0T640
          key={mealCard.id}
          id={mealCard.id}
          title={mealCard.title}
          image={mealCard.imageUrl}
        />
      ))}

      {/* button */}
      <div className="w-full h-[14%] 500:h-[60px] flex justify-center items-center gap-x-[24px] z-40 600:mt-[12px]">
        <FaShoppingCart
          size="25px"
          className="text-lightTextCol cursor-pointer"
        />
        <div
          className={`py-4 px-4 rounded-xl ${styles.flexCenter} buttonShadow btnPrimaryCol hover:bg-[#293D2B] cursor-pointer`}
        >
          <p className={`${styles.heading14} text-lightTextCol`}>
            New Combination
          </p>
        </div>
        <FaHeart size="25px" className="text-lightTextCol cursor-pointer" />
      </div>
    </div>
  );
};

// 140px
export default HomeCards0T640;
