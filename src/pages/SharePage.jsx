import React, { useState } from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardsSamples from "../utilities/cards/CardsSamples";

const SharePage = () => {
  const [selected] = useState("3 Meals");
  const [filterState, setFilterState] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Vegetarian: false,
    Vegan: false,
  });
  const { width, height } = useWindowDimensions();

  // filter
  const handleSelectedFilterChange = (e) => {
    setSelectedFilter({
      ...selectedFilter,
      [e]: !selectedFilter[e],
    });
  };

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
            {/* Filter */}
            <div
              className={`relative w-[50px] h-[46px] border-[1px] rounded-xl ${styles.flexCenter} text-lightTextCol z-[60] cursor-pointer`}
              onClick={() => setFilterState((prevState) => !prevState)}
            >
              <FaFilter size="14px" />
              <div
                className={`${
                  filterState ? "flex" : "hidden"
                } w-[256px] absolute bg-bgSecondaryDarkCol informationBoxShadow rounded-2xl top-[110%] right-0 flex-col p-4`}
              >
                <p
                  className={`${styles.heading14} border-b-[1px] border-lightTextCol mb-2`}
                >
                  Filter for:
                </p>
                {/* content */}
                <div className="flex flex-col">
                  {Object.keys(selectedFilter).map((key, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectedFilterChange(key)}
                      className="flex items-center hover:bg-[#3E4150] rounded-[4px] py-2 cursor-pointer hover:px-2"
                    >
                      <p className={`${styles.paragraph14} w-[110px]`}>{key}</p>
                      <div className="flex flex-grow gap-x-4 items-center justify-between">
                        <div
                          className={`px-4 py-1 w-fit ${
                            key === "Dinner"
                              ? "tagDinner"
                              : key === "Lunch"
                              ? "tagLunch"
                              : "tagBreakfast"
                          } rounded-full ${styles.tag10}`}
                        >
                          {key}
                        </div>
                        <div className="flex">
                          {selectedFilter[key] ? <FaCheck /> : <FaTimes />}
                        </div>
                      </div>
                    </div>
                  ))}
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
            {Object.keys(selectedFilter).map((key, index) => {
              if (selectedFilter[key]) {
                return (
                  <div
                    key={index}
                    className={`px-4 py-1 w-fit  ${
                      key === "Dinner"
                        ? "tagDinner"
                        : key === "Lunch"
                        ? "tagLunch"
                        : "tagBreakfast"
                    }  rounded-full ${styles.tag10}`}
                  >
                    {key}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* meals */}
      <div
        className={`${
          selected === "3 Meals" ? "1400:grid flex" : "hidden"
        } gap-2 grid-cols-2 flex-wrap w-full px-6 500:px-10 overflow-scroll 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
      >
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />

        {/* puffer */}
        <div className="h-[20%] md:h-[5%] w-full"></div>
      </div>
    </div>
  );
};

export default SharePage;
