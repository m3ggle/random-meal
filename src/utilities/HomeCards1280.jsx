import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";
import Card1280 from "./cards/Card1280";

/* 1280px-...px */

const HomeCards1280 = ({ exampleData }) => {
  return (
    <div
      className={`hidden xl:flex w-full h-screen items-center justify-center`}
    >
      <div className="flex flex-col gap-y-[60px] w-full">
        {/* top */}
        <div className="flex justify-center items-center gap-x-[48px] w-full">
          {exampleData.map((mealCard) => (
            <Card1280
              key={mealCard.id}
              id={mealCard.id}
              title={mealCard.title}
              image={mealCard.imageUrl}
            />
          ))}
        </div>
        {/* bottom */}
        <div className="w-full flex justify-center items-center gap-x-[24px] z-40">
          <FaShoppingCart size="25px" className="text-lightTextCol" />
          <div
            className={`py-4 px-4 rounded-xl ${styles.flexCenter} buttonShadow btnPrimaryCol hover:bg-[#293D2B]`}
          >
            <p className={`${styles.heading14} text-lightTextCol`}>
              New Combination
            </p>
          </div>
          <FaHeart size="25px" className="text-lightTextCol" />
        </div>
      </div>
    </div>
  );
};

export default HomeCards1280;
