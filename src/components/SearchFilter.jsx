import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import SpoonacularContext from "../context/SpoonacularContext";
import styles from "../styles";

const SearchFilter = ({
  callbackFilteredMeals,
  callbackFilteredCombos,
  meals,
  combos,
  twoChoice,
  first,
  second 
}) => {
  const { user } = useContext(SpoonacularContext);
  const [filterState, setFilterState] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Vegetarian: false,
    Vegan: false,
  });
  const [searchText, setSearchText] = useState("");

  // favMeals: when changes call search + tag filter function
  useEffect(() => {
    if (twoChoice === first) {
      callbackFilteredMeals(tagfilter(searchFilter("first")));
    }
  }, [searchText, selectedFilter, meals, twoChoice]);

  // favCombos: when changes call search + tag filter function
  useEffect(() => {
    if (twoChoice === second) {
      callbackFilteredCombos(searchFilter("second"));
    }
  }, [searchText, user.favCombos, combos, twoChoice]);

  // functionality of search filter
  const searchFilter = (type) => {
    let searchFilteredMeals;
    let re = new RegExp(searchText, "i");
    switch (type) {
      case "first":
        searchFilteredMeals = meals.filter((meal) =>
          meal.mealinformation.title.match(re)
        );
        break;
      case "second":
        searchFilteredMeals = combos.filter((combo) => combo.title.match(re));
        break;
      default:
        break;
    }
    return searchFilteredMeals;
  };

  // functionality of tags filter
  const tagfilter = (filteredBySearch) => {
    // get all active filter tags
    let activeFilters = [];
    activeFilters = Object.entries(selectedFilter).filter((pair) => pair[1]);
    activeFilters = activeFilters.map((fil) => {
      return fil[0];
    });
    // fill with meals that have one of the active filter tags
    let fullFiltered = [];
    filteredBySearch.map((meal) => {
      activeFilters.some((fil) => {
        if (meal.mealinformation.dishTypes.includes(fil)) {
          fullFiltered.push(meal);
          return meal;
        }
      });
    });

    if (fullFiltered.length > 0) {
      return fullFiltered;
    } else {
      return filteredBySearch;
    }
  };

  // when change tag filter
  const handleSelectedFilterChange = (e) => {
    setSelectedFilter({
      ...selectedFilter,
      [e]: !selectedFilter[e],
    });
  };

  return (
    <div className="flex justify-center h-30 pt-8">
      <div className="w-full max-w-[325px] h-30 flex flex-col gap-y-[8px] ">
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`bg-transparent w-full h-[20px] focus:outline-none text-lightTextCol ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Meals..."
            />
          </div>
          {/* Filter */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className={`${
              twoChoice === "first" ? "flex" : "hidden"
            } relative w-[50px] h-[46px] border-[1px] rounded-xl ${
              styles.flexCenter
            } text-lightTextCol z-[60] cursor-pointer`}
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
                  <motion.div
                    whileTap={{ scale: 0.98 }}
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
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* Tags from filter */}
        <div
          className={`${
            twoChoice === "first" ? "flex" : "hidden"
          } flex flex-row gap-2`}
        >
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
  );
};

export default SearchFilter;
