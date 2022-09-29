import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import Catalog from "../components/Catalog";
import ShareCombos from "../components/ShareCombos";
import TwoChoice from "../components/TwoChoice";
import SpoonacularContext from "../context/SpoonacularContext";
import { useGetMeals } from "../hooks/useGetMeals";
import styles from "../styles";

const SharePage = () => {
  const { user, meals, combos, dispatch } = useContext(SpoonacularContext);
  const [filterState, setFilterState] = useState(false);
  const { handleGetMealsCombos } = useGetMeals();
  const [selectedFilter, setSelectedFilter] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Vegetarian: false,
    Vegan: false,
  });
  const [searchText, setSearchText] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filteredCombos, setFilteredCombos] = useState([]);
  const [internalMeals, setInternalMeals] = useState([]);
  const [internalCombos, setInternalCombos] = useState([]);
  const [twoChoice, setTwoChoice] = useState("first");

  // context
  useEffect(() => {
    const updateContext = async () => {
      const { formattedCollectedMeals, formattedCombos } =
        await handleGetMealsCombos(
          meals,
          combos,
          user.favMeals,
          user.favCombos,
          "collection"
        );
      dispatch({
        type: "UPDATE_MEALS_AND_COMBOS",
        payload: {
          meals: formattedCollectedMeals,
          combos: formattedCombos,
        },
      });
    };

    updateContext();
  }, []);

  // set/updatefavorite Meals (internal)
  useEffect(() => {
    let internalMealsMeals = [];
    Object.keys(meals).map((mealId) => {
      internalMealsMeals.push({ ...meals[mealId] });
    });
    setInternalMeals(internalMealsMeals);
  }, [user.favMeals, meals]);

  useEffect(() => {
    let internalMealsCombos = [];
    Object.keys(combos).map((comboId) => {
      internalMealsCombos.push({ ...combos[comboId] });
    });
    setInternalCombos(internalMealsCombos);
  }, [user.favCombos, meals]);

  // setFilteredMeals
  useEffect(() => {
    setFilteredMeals(internalMeals);
  }, [internalMeals]);

  useEffect(() => {
    setFilteredCombos(internalCombos);
  }, [internalCombos]);

  // favMeals: when changes call search + tag filter function
  useEffect(() => {
    if (twoChoice === "second") {
      setFilteredMeals(tagfilter(searchFilter("second")));
    }
  }, [searchText, selectedFilter, twoChoice]);

  // favCombos: when changes call search + tag filter function
  useEffect(() => {
    if (twoChoice === "first") {
      setFilteredCombos(searchFilter("first"));
    }
  }, [searchText, twoChoice]);

  // functionality of search filter
  const searchFilter = (type) => {
    let searchFilteredMeals;
    let re = new RegExp(searchText, "i");
    switch (type) {
      case "second":
        searchFilteredMeals = internalMeals.filter((meal) =>
          meal.mealinformation.title.match(re)
        );
        break;
      case "first":
        searchFilteredMeals = internalCombos.filter((combo) =>
          combo.title.match(re)
        );
        break;
      default:
        break;
    }
    return searchFilteredMeals;
  };

  // functionality of tags filter
  const tagfilter = (filteredBySearch) => {
    // get all active filter tags
    let activeFilters;
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

  const handleTwoChoice = (msg) => setTwoChoice(msg);

  return (
    <div className="w-full h-full overflow-scroll flex flex-col gap-y-3">
      <Helmet>
        <title>Share is Caring</title>
        <meta name="description" content="" />
      </Helmet>

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
                twoChoice === "first" ? "hidden" : "flex"
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
          <div
            className={`text-inputCol ${styles.paragraph14} flex items-center gap-x-[8px] hidden`}
          >
            <FaExclamationTriangle className="pb-[2px] text-failure hidden" />
            <FaExclamationCircle className="pb-[2px] text-warning hidden" />
            Please Enter The Correct Password
          </div>
          {/* Tags from filter */}
          <div
            className={`flex flex-row gap-2 ${
              twoChoice === "second" ? "opacity-100" : "opacity-0"
            }`}
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

      {/* 1 Meal vs 3 Meals */}
      <TwoChoice
        callbackTwoChoice={handleTwoChoice}
        firstChoice="Sharing"
        secondChoice="Catalog"
      />

      {twoChoice === "first" ? (
        <ShareCombos filteredCombos={filteredCombos} />
      ) : (
        <Catalog filteredMeals={filteredMeals} />
      )}
    </div>
  );
};

export default SharePage;
