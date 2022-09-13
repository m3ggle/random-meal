import React, { useState } from "react";
import {
  FaCheck,
  FaChevronLeft,
  FaCircleNotch,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaFont,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardsSamples from "../utilities/cards/CardsSamples";
import {useNavigate} from "react-router-dom"

const Creation = () => {
  const { width, height } = useWindowDimensions();
  const [selected] = useState("Preview");
  /*
    {
      currently selected:
      title: "Choose a Title for your new Combination"
      breakfast: "Choose your Breakfast"
      lunch: "Choose your Lunch"
      dinner: "Choose your Dinner"
      preview: "Preview"
    }
  */

  const navigate = useNavigate()
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-bgPrimaryCol">
      <div className="relative w-full h-screen overflow-auto flex justify-center ">
        {/* beginning of the actual modal */}
        <div
          className={`absolute top-[6%] 900:top-[13%] w-full min-h-[94%] 900:min-h-[87%] 900:w-10/12 rounded-t-[30px] modalShadow flex flex-col py-10 bg-bgPrimaryCol px-6 sm:px-10`}
        >
          {/* top back and leave */}
          <div className="w-full h-10 flex justify-between">
            {/* go back */}
            <div className={`w-11 h-11 rounded-full ${styles.flexCenter}`}>
              <FaChevronLeft size="30px" className="text-lightTextCol" />
            </div>
            {/* go leave */}
            <div
              onClick={() => navigate(-1)}
              className={`w-11 h-11 rounded-full ${styles.flexCenter} cursor-pointer`}
            >
              <FaTimes size="30px" className="text-lightTextCol" />
            </div>
          </div>

          {/* top titel and search + filter */}
          <div className="w-full flex flex-col gap-4 py-4">
            {/* title */}
            <p className={`${styles.heading24} text-lightTextCol`}>
              Choose a Title for your new Combination
            </p>
            {/* search + filter */}
            <div
              className={`w-full ${
                selected !== "Title" && selected !== "Preview"
                  ? "flex"
                  : "hidden"
              } flex-col items-center gap-y-2`}
            >
              <div className="w-full max-w-[360px] flex items-center flex-col gap-y-[8px] ">
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
                      placeholder="Search for a Meal"
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
                          <p className={`${styles.paragraph14} w-[110px]`}>
                            Lunch
                          </p>
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
                          <p className={`${styles.paragraph14} w-[110px]`}>
                            Dinner
                          </p>
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
                          <p className={`${styles.paragraph14} w-[110px]`}>
                            Vegan
                          </p>
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
              </div>
              {/* Filter */}
              <div className="flex flex-row w-full max-w-[360px] gap-2">
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

          {/* meals */}
          <div className={`w-full flex flex-row flex-1 pb-3 `}>
            {/* 1. choose titel */}
            <div
              className={`w-full 800:w-6/12 ${
                selected === "Title" ? "flex" : "hidden"
              } flex-col`}
            >
              {/* Label */}
              <label className={`text-inputCol ${styles.paragraph12} hidden`}>
                Pinterest
              </label>
              <div className="text-inputCol w-full border-solid border-b-[1px] flex items-center px-[10px] gap-[8px] py-[12px]">
                {/* icon */}
                <div className={`w-[20px] h-[20px]  ${styles.flexCenter}`}>
                  <FaFont className="text-inputCol" size="15px" />
                </div>
                {/* text */}
                <input
                  type="text"
                  className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
                  placeholder="Monday's Meal"
                />
                <div
                  className={`w-[20px] h-[20px] ${styles.flexCenter} cursor-pointer`}
                >
                  <FaCircleNotch className="text-inputCol w-[15px]" />
                </div>
              </div>
              <div
                className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
              >
                <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
                <FaExclamationCircle className="pb-[2px] text-warning hidden" />
                Please Enter The Correct Password
              </div>
            </div>

            {/* 2. Breakfast */}
            <div
              className={`${
                selected === "Breakfast" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
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
            </div>
            {/* 2. Lunch */}
            <div
              className={`${
                selected === "Lunch" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
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
            </div>

            {/* 2. Dinner */}
            <div
              className={`${
                selected === "Dinner" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
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
            </div>

            {/* 4. Preview */}
            <div
              className={`${
                selected === "Preview" ? "flex" : "hidden"
              } gap-2 flex-wrap w-full 600:gap-6 justify-center max-w-[1350px]`}
            >
              <CardsSamples type="three" />
            </div>

            {/* check btn */}
            <div
              className={`fixed  top-[88%]
              } left-[74%] 600:left-[84%] btnPrimaryCol buttonShadow hover:bg-[#293D2B] w-14 h-14 600:w-20 600:h-20 z-30 rounded-full ${styles.flexCenter}`}
            >
              <FaCheck
                size={width > 600 ? "25px" : "20px"}
                className="text-lightTextCol"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;
