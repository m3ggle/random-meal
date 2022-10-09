import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaCheck, FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { useUserContext } from "../context/user/UserContext";
import styles from "../styles";

const SearchFilter = ({
  callbackFilteredMeals,
  callbackFilteredCombos,
  meals,
  combos,
  twoChoice,
  first,
  second,
}) => {
  const { user } = useUserContext();
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
    <div className="h-30 flex justify-center pt-8">
      <div className="h-30 flex w-full max-w-[325px] flex-col gap-y-[8px] ">
        {/* Label */}
        <label className={`text-inputCol ${styles.paragraph14} hidden`}>
          Search
        </label>
        <div className="flex w-full gap-x-[10px]">
          <div className="flex w-full items-center gap-[8px] rounded-xl border-[1px] border-solid px-[10px] py-[12px] text-inputCol">
            {/* icon */}
            <div className={`h-[20px] w-[20px]  ${styles.flexCenter}`}>
              <FaSearch className="text-inputCol" size="15px" />
            </div>
            {/* text */}
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className={`h-[20px] w-full bg-transparent text-lightTextCol focus:outline-none ${styles.paragraph14} placeholder:text-inputCol`}
              placeholder="Search For Meals..."
            />
          </div>
          {/* Filter */}
          <motion.div
            whileTap={{ scale: 0.98 }}
            className={`${
              twoChoice === first ? "flex" : "hidden"
            } relative h-[46px] w-[50px] rounded-xl border-[1px] ${
              styles.flexCenter
            } z-[60] cursor-pointer text-lightTextCol`}
            onClick={() => setFilterState((prevState) => !prevState)}
          >
            <FaFilter size="14px" />
            <div
              className={`${
                filterState ? "flex" : "hidden"
              } informationBoxShadow absolute top-[110%] right-0 w-[256px] flex-col rounded-2xl bg-bgSecondaryDarkCol p-4`}
            >
              <p
                className={`${styles.heading14} mb-2 border-b-[1px] border-lightTextCol`}
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
                    className="flex cursor-pointer items-center rounded-[4px] py-2 hover:bg-[#3E4150] hover:px-2"
                  >
                    <p className={`${styles.paragraph14} w-[110px]`}>{key}</p>
                    <div className="flex flex-grow items-center justify-between gap-x-4">
                      <div
                        className={`w-fit px-4 py-1 ${
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
            twoChoice === first ? "flex" : "hidden"
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
                  className={`w-fit px-4 py-1  ${
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
