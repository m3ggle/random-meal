import React from 'react'
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import BreakfastImg from "../assets/images/breakfastExample.jpg";
import DinnerImg from "../assets/images/dinnerExample.jpg";
import LunchImg from "../assets/images/lunchExample.jpg";
import styles from "../styles";
// import RealBreakfastImg from "../assets/images/breakfast2.jpg";
// import RealLunchImg from "../assets/images/lunch2.jpg";
// import RealDinnerImg from "../assets/images/dinner2.jpg";

/* 0-640px */

const HomeCards0T640 = () => {
    return (
    <div className="w-full flex items-center flex-col sm:hidden 500:gap-y-[10px] 500:py-[20px]">
      {/* meals */}
      <div
        className="relative w-full 500:w-[90%] h-[200px] 500:rounded-[20px] bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-10"
        style={{ backgroundImage: `url(${BreakfastImg})` }}
      >
        <div className="w-full h-full imgOverlayRandomMeal"></div>
        <p
          className={`absolute bottom-[5%] left-[5%] ${styles.heading24} text-lightTextCol`}
        >
          Morbi ac diam pretium
        </p>
        {/* icons */}
        <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
          <FaHeart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaShoppingCart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaLock
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
        </div>
      </div>
      <div
        className="relative mt-[-10px] 500:mt-0 w-full 500:w-[90%] h-[200px] rounded-t-[20px] 500:rounded-[20px] bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-20"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
        <div className="w-full h-full imgOverlayRandomMeal"></div>
        <p
          className={`absolute bottom-[5%] left-[5%] ${styles.heading24} text-lightTextCol`}
        >
          Morbi ac diam pretium
        </p>
        {/* icons */}
        <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
          <FaHeart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaShoppingCart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaLock
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
        </div>
      </div>
      <div
        className="relative mt-[-10px] 500:mt-0 w-full 500:w-[90%] h-[200px] rounded-t-[20px] 500:rounded-[20px] bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-30"
        style={{ backgroundImage: `url(${DinnerImg})` }}
      >
        <div className="w-full h-full imgOverlayRandomMeal"></div>
        <p
          className={`absolute bottom-[5%] left-[5%] ${styles.heading24} text-lightTextCol`}
        >
          Morbi ac diam pretium
        </p>
        {/* icons */}
        <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
          <FaHeart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaShoppingCart
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaLock
            size="24px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
        </div>
      </div>

      {/* button */}
      <div className="w-full h-[140px] 500:h-[60px] flex justify-center items-center gap-x-[24px] z-40">
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
  );
}

export default HomeCards0T640