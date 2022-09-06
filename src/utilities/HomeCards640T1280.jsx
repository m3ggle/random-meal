import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import BreakfastImg from "../assets/images/breakfastExample.jpg";
import DinnerImg from "../assets/images/dinnerExample.jpg";
import LunchImg from "../assets/images/lunchExample.jpg";
import styles from "../styles";
// import RealBreakfastImg from "../assets/images/breakfast2.jpg";
// import RealLunchImg from "../assets/images/lunch2.jpg";
// import RealDinnerImg from "../assets/images/dinner2.jpg";

/* 640px-1280px */

const HomeCards640T1280 = () => {
  return (
    <div
      className={`hidden sm:flex xl:hidden w-full h-screen items-center justify-center`}
    >
      <div className="flex flex-col gap-y-[60px] 900:gap-y-[80px] 1100:gap-y-[120px] w-full">
        {/* top */}
        <div className="flex justify-evenly items-center w-full">
          {/* Card1 */}
          {/* Card little */}
          <div
            className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow 900:scale-[125%] 1100:scale-[150%]"
            style={{ backgroundImage: `url(${BreakfastImg})` }}
          >
            {/* name and tag */}
            <div className="w-[170px] bg-lightTextCol rounded-xl absolute top-[69.5%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
              <p
                className={`text-[16px] font-semibold whitespace-nowrap truncate`}
              >
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
              <FaHeart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaShoppingCart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaLock
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
            </div>
          </div>
          {/* Card2 */}
          {/* Card little */}
          <div
            className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow 900:scale-[125%] 1100:scale-[150%]"
            style={{ backgroundImage: `url(${LunchImg})` }}
          >
            {/* name and tag */}
            <div className="w-[170px] bg-lightTextCol rounded-xl absolute top-[69.5%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
              <p
                className={`text-[16px] font-semibold whitespace-nowrap truncate`}
              >
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
              <FaHeart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaShoppingCart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaLock
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
            </div>
          </div>
          {/* Card3 */}
          {/* Card little */}
          <div
            className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow 900:scale-[125%] 1100:scale-[150%]"
            style={{ backgroundImage: `url(${DinnerImg})` }}
          >
            {/* name and tag */}
            <div className="w-[170px] bg-lightTextCol rounded-xl absolute top-[69.5%] flex flex-start px-[10px] py-3 flex-col gap-y-[2px] cardNameShadow">
              <p
                className={`text-[16px] font-semibold whitespace-nowrap truncate`}
              >
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
              <FaHeart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaShoppingCart
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
              />
              <FaLock
                size="18px"
                className="text-iconTransCol drop-shadow-cardIcon"
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

export default HomeCards640T1280;
