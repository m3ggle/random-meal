import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import BreakfastImg from "../assets/images/breakfastExample.jpg";
import DinnerImg from "../assets/images/dinnerExample.jpg";
import LunchImg from "../assets/images/lunchExample.jpg";
import styles from "../styles";
// import RealBreakfastImg from "../assets/images/breakfast2.jpg";
// import RealLunchImg from "../assets/images/lunch2.jpg";
// import RealDinnerImg from "../assets/images/dinner2.jpg";

/* 1280px-...px */

const HomeCards1280 = () => {
  return (
    <div
      className={`hidden xl:flex w-full h-screen items-center justify-center`}
    >
      <div className="flex flex-col gap-y-[60px] w-full">
        {/* top */}
        <div className="flex justify-center items-center gap-x-[48px] w-full">
          {/* Card1 */}
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
          {/* Card2 */}
          {/* Card large */}
          <div
            className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
            style={{ backgroundImage: `url(${LunchImg})` }}
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
          {/* Card3 */}
          {/* Card large */}
          <div
            className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
            style={{ backgroundImage: `url(${DinnerImg})` }}
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
