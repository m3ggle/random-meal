import React from "react";
import { FaHeart, FaLock, FaShoppingCart } from "react-icons/fa";
import BreakfastImg from "../assets/images/breakfastExample.jpg";
import DinnerImg from "../assets/images/dinnerExample.jpg";
import LunchImg from "../assets/images/lunchExample.jpg";
import styles from "../styles";
// import RealBreakfastImg from "../assets/images/breakfast2.jpg";
// import RealLunchImg from "../assets/images/lunch2.jpg";
// import RealDinnerImg from "../assets/images/dinner2.jpg";
import Card0T640 from "../utilities/HomeCards0T640"
import Card640T1280 from "../utilities/HomeCards640T1280"
import Card1280 from "../utilities/HomeCards1280"

const RandomMeal = () => {
  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      {/* 0-640px */}
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

      {/* 640px - 1280px */}
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

      {/* 1280px - ...px */}
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
                <p
                  className={`${styles.paragraph20} whitespace-nowrap truncate`}
                >
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
              style={{ backgroundImage: `url(${BreakfastImg})` }}
            >
              {/* name and tag */}
              <div className="w-[280px] bg-lightTextCol rounded-xl absolute top-[77%] flex flex-start px-[10px] py-3 flex-col gap-y-2 cardNameShadow">
                <p
                  className={`${styles.paragraph20} whitespace-nowrap truncate`}
                >
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
              style={{ backgroundImage: `url(${BreakfastImg})` }}
            >
              {/* name and tag */}
              <div className="w-[280px] bg-lightTextCol rounded-xl absolute top-[77%] flex flex-start px-[10px] py-3 flex-col gap-y-2 cardNameShadow">
                <p
                  className={`${styles.paragraph20} whitespace-nowrap truncate`}
                >
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

      {/* large Cards */}
      {/* <div
        className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${BreakfastImg})` }}
      >
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
      <div
        className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${BreakfastImg})` }}
      >
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
      <div
        className="w-[308px] min-h-[423px] max-h-[423px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${BreakfastImg})` }}
      >
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
      </div> */}

      {/* Small Cards */}
      {/* <div
        className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
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
      <div
        className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
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
      <div
        className="w-[193px] h-[264px] bg-cover bg-center flex justify-center rounded-xl relative cardShadow"
        style={{ backgroundImage: `url(${LunchImg})` }}
      >
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
      </div> */}
    </div>
  );
};

export default RandomMeal;
