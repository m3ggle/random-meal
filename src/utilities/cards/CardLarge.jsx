import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import BreakfastImg from "../../assets/images/breakfastExample.jpg";
import DinnerImg from "../../assets/images/dinnerExample.jpg";
import LunchImg from "../../assets/images/lunchExample.jpg";
import ProfilePic from "../../assets/images/ProfilePic.webp";
import styles from "../../styles";

const CardLarge = () => {
  return (
    <div
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
    </div>
  );
};

export default CardLarge;