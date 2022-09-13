import React, { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";
import Card0T640 from "./cards/Card0T640";

/* 0-640px */

const HomeCards0T640 = () => {
  const [example] = useState([
    {
      id: 12,
      title: "Morbi ac diam pretium",
      imageUrl:
        "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
    },
    {
      id: 123,
      title: "Egestas nec commodo",
      imageUrl:
        "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    },
    {
      id: 1234,
      title: "Mattis imperdiet blandit aenean ",
      imageUrl:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ]);

  return (
    <div className="w-full max-w-[640px] flex items-center flex-col xl:hidden 500:gap-y-[10px] 500:py-[20px]">
      {/* meals */}
      {example.map((mealCard) => (
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
