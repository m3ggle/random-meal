import React, { useState } from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaTimes,
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardsSamples from "../utilities/cards/CardsSamples";

const FavMeals = () => {
  const [selected] = useState("3 Meals");
  const { width, height } = useWindowDimensions();

  return (
    <div className="w-full h-screen flex flex-col gap-y-3">
      {/* header */}
      <div className="flex justify-center h-[120px] pt-8">
        <div className="w-full max-w-[325px] flex flex-col gap-y-[8px] ">
          {/* Label */}
          <label className={`text-inputCol ${styles.paragraph14} hidden`}>
            Search
          </label>
          <div className="w-full flex gap-x-[10px]">
            <div className="text-inputCol w-full border-solid border-[1px] flex items-center rounded-xl px-[10px] gap-[8px] py-[12px]">
              {/* icon */}
              <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                <FaSearch className="text-inputCol" size="15px" />
              </div>
              {/* text */}
              <input
                type="text"
                className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                placeholder="Search For Meals..."
              />
            </div>
            <div
              className={`relative w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol z-[60]`}
            >
              <FaFilter size="14px" />
              {/* Filter */}
              <div className="flex hidden w-[256px] absolute bg-bgSecondaryDarkCol informationBoxShadow rounded-2xl top-[110%] right-0 flex-col p-4">
                <p
                  className={`${styles.heading14} border-b-[1px] border-lightTextCol mb-2`}
                >
                  Filter for:
                </p>
                {/* content */}
                <div className="flex flex-col">
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] hover:px-2 rounded-[4px] py-2 cursor-pointer">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Breakfast
                    </p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Breakfast
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Lunch</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag10}`}
                      >
                        Lunch
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Dinner</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagDinner rounded-full ${styles.tag10}`}
                      >
                        Dinner
                      </div>
                      <div className="flex">
                        <FaCheck />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>
                      Vegeterian
                    </p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Vegeterian
                      </div>
                      <div className="flex">
                        <FaTimes />
                      </div>
                    </div>
                  </div>
                  {/* one line */}
                  <div className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2">
                    <p className={`${styles.paragraph14} w-[110px]`}>Vegan</p>
                    <div className="flex flex-grow gap-x-4 items-center justify-between">
                      <div
                        className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
                      >
                        Vegan
                      </div>
                      <div className="flex">
                        <FaTimes />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
          {/* Tags from filter */}
          <div className="flex flex-row gap-2">
            <p className={`text-lightTextCol ${styles.paragraph16} mr-1`}>
              Filter:
            </p>
            <div
              className={`px-4 py-1 w-fit tagLunch rounded-full ${styles.tag10}`}
            >
              Lunch
            </div>
            <div
              className={`px-4 py-1 w-fit tagDinner rounded-full ${styles.tag10}`}
            >
              Dinner
            </div>
            <div
              className={`px-4 py-1 w-fit tagBreakfast rounded-full ${styles.tag10}`}
            >
              Vegetarian
            </div>
          </div>
        </div>
      </div>

      {/* 1 vs 3 */}
      <div className={`${styles.flexCenter} mb-4`}>
        <div
          className={`${styles.flexCenter} w-[120px] h-6 border-b-2 ${
            selected !== "1 Meal" && "border-[#626476]"
          } cursor-pointer`}
        >
          <p
            className={`text-[16px] ${
              selected === "1 Meal"
                ? "text-lightTextCol font-semibold"
                : "text-[#626476] font-normal"
            }`}
          >
            1 Meal
          </p>
        </div>
        <div
          className={`${styles.flexCenter} w-[120px] h-6 border-b-2 ${
            selected !== "3 Meals" && "border-[#626476]"
          } cursor-pointer`}
        >
          <p
            className={`text-[16px] ${
              selected === "3 Meals"
                ? "text-lightTextCol font-semibold"
                : "text-[#626476] font-normal"
            }`}
          >
            3 Meals
          </p>
        </div>
      </div>
      {/* meals (1 meal and 3 meals are actually not seperate, just without the logic behind it there is no other choice otherwise put it in one div) */}
      {/* 1 meal */}
      <div
        className={`${
          selected === "1 Meal" ? "flex" : "hidden"
        } gap-2 flex-wrap w-full px-10 overflow-scroll 600:gap-6 justify-center max-w-[1350px]`}
      >
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}
        {width < 600 ? (
          <CardsSamples type="mobile" />
        ) : (
          <CardsSamples type="little" />
        )}

        {/* puffer */}
        <div className="h-[20%] md:h-[5%] w-full"></div>
      </div>

      {/* 3 Meals */}
      <div
        className={`${
          selected === "3 Meals" ? "1400:grid flex" : "hidden"
        } gap-2 grid-cols-2 flex-wrap w-full px-6 500:px-10 overflow-scroll 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
        // className={`${
        //   selected === "3 Meals" ? "flex" : "hidden"
        // } gap-2 flex-wrap w-full px-6 500:px-10 overflow-scroll 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
      >
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <div
          className={`absolute  ${
            height > 600 && width > 767 ? "top-[88%]" : "top-[78%]"
          } left-[74%] 600:left-[84%] btnPrimaryCol buttonShadow hover:bg-[#293D2B] w-14 h-14 600:w-20 600:h-20 z-30 rounded-full ${
            styles.flexCenter
          } z-[80]`}
        >
          <FaPlus
            size={width > 600 ? "25px" : "20px"}
            className="text-lightTextCol"
          />
        </div>
        {/* puffer */}
        <div className="h-[20%] md:h-[5%] w-full"></div>
      </div>
    </div>
  );
};

export default FavMeals;