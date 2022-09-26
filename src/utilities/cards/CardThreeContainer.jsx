import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import BreakfastImg from "../../assets/images/breakfastExample.jpg";
import DinnerImg from "../../assets/images/dinnerExample.jpg";
import LunchImg from "../../assets/images/lunchExample.jpg";
import ProfilePic from "../../assets/images/ProfilePic.webp";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";
import CardLittle from "./CardLittle";
import CardMobile from "./CardMobile";
import CardThree from "./CardThree";

const CardThreeContainer = () => {
    const { width } = useWindowDimensions();
  return (
    <div className="flex flex-col px-6 pt-4 pb-6 h-fit rounded-[24px] combinationBg">
      {/* header */}
      <div className="flex flex-row 500:items-center justify-between gap-x-5">
        {/* left part */}
        <div className="flex items-center gap-x-1 500:gap-x-4">
          <p
            className={
              width > 700
                ? `${styles.heading24} text-lightTextCol`
                : `${styles.heading16} text-lightTextCol whitespace-nowrap truncate`
            }
          >
            Varius cras sapien asam
          </p>
          <img
            src={ProfilePic}
            alt="Profile"
            className={`${
              width > 700
                ? "w-[44px] h-[44px] cursor-pointer"
                : "w-[24px] h-[24px] cursor-pointer"
            }`}
          />
        </div>
        {/* right part */}
        <div className="flex items-center gap-2 text-lightTextCol">
          <p
            className={
              width > 700
                ? `text-[16px] font-semibold cursor-pointer`
                : `text-[14px] font-semibold cursor-pointer`
            }
          >
            134
          </p>
          <FaHeart
            size={width > 700 ? "16px" : "14px"}
            className="cursor-pointer"
          />
          <FaShoppingCart
            size={width > 700 ? "16px" : "14px"}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* info */}
      <div className="flex flex-wrap w-full gap-x-1 gap-y-[2px] mt-1 mb-2">
        <div className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag10}`}>
          Calories: 1245kcal
        </div>
        <div className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag10}`}>
          Fat: 32g
        </div>
        <div className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag10}`}>
          Sugar: 32g
        </div>
        <div className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag10}`}>
          Protein: 20g
        </div>
      </div>
      {/* cards */}
      {/* over 600px */}
      <div className="hidden 600:flex gap-x-2">
        {/* {width > 700 ? <CardLittle /> : <CardMobile />}
        {width > 700 ? <CardLittle /> : <CardMobile />}
              {width > 700 ? <CardLittle /> : <CardMobile />} */}
              {/* cardlittle is the bigger one */}
              <CardThree />
              <CardThree />
              <CardThree />
      </div>

      {/* under 600px */}
      <Link
        to={"/mealdetails/123"}
        className="flex 600:hidden flex-col gap-y-2  w-full"
      >
        <div
          className="relative w-full h-[100px] rounded-xl bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-10"
          style={{ backgroundImage: `url(${BreakfastImg})` }}
        >
          <div className="w-full h-full imgOverlayRandomMeal"></div>
          <p
            className={`absolute bottom-[5%] left-[5%] ${styles.heading16} text-lightTextCol`}
          >
            Morbi ac diam pretium
          </p>
          {/* icons */}
          <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
            <FaHeart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
            <FaShoppingCart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
          </div>
        </div>
        <div
          className="relative w-full h-[100px] rounded-xl bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-20"
          style={{ backgroundImage: `url(${LunchImg})` }}
        >
          <div className="w-full h-full imgOverlayRandomMeal"></div>
          <p
            className={`absolute bottom-[5%] left-[5%] ${styles.heading16} text-lightTextCol`}
          >
            Morbi ac diam pretium
          </p>
          {/* icons */}
          <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
            <FaHeart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
            <FaShoppingCart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
          </div>
        </div>
        <div
          className="relative w-full h-[100px] rounded-xl bg-red-400 bg-center bg-cover overflow-hidden DayMealsShadow z-30"
          style={{ backgroundImage: `url(${DinnerImg})` }}
        >
          <div className="w-full h-full imgOverlayRandomMeal"></div>
          <p
            className={`absolute bottom-[5%] left-[5%] ${styles.heading16} text-lightTextCol`}
          >
            Morbi ac diam pretium
          </p>
          {/* icons */}
          <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[8%] left-[90%] 500:top-[12%] 500:left-[92%]">
            <FaHeart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
            <FaShoppingCart
              size="14px"
              className="text-iconTransCol drop-shadow-cardIcon"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardThreeContainer;
