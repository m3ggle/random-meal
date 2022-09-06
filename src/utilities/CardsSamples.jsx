import React from "react";
import BreakfastImg from "../assets/images/breakfastExample.jpg";
import LunchImg from "../assets/images/lunchExample.jpg";
import DinnerImg from '../assets/images/dinnerExample.jpg'
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import styles from "../styles";

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-y-[30px] py-[30px]">
      {/* Card large */}
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

      {/* Card little */}
      <div
        className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
        {/* name and tag */}
        <div className="w-[170px] bg-lightTextCol rounded-xl absolute top-[69.5%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
          <p className={`text-[16px] font-semibold whitespace-nowrap truncate`}>
            Egestas nec commodo...
          </p>
          <div
            className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag8}`}
          >
            Lunch
          </div>
        </div>

        {/* icons */}
        <div className="w-fit h-fit flex flex-col gap-y-[10px] absolute top-[6%] left-[83%] ">
          <FaHeart size="18px" className="text-iconTransCol drop-shadow-cardIcon" />
          <FaShoppingCart
            size="18px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaLock size="18px" className="text-iconTransCol drop-shadow-cardIcon" />
        </div>
      </div>

      {/* Card mobile small */}
      <div
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
          <FaHeart size="15px" className="text-iconTransCol drop-shadow-cardIcon" />
          <FaShoppingCart
            size="15px"
            className="text-iconTransCol drop-shadow-cardIcon"
          />
          <FaLock size="15px" className="text-iconTransCol drop-shadow-cardIcon" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
