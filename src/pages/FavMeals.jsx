import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import {
  FaCheck,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaFilter,
  FaPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FavMealsOne from "../components/FavMealsOne";
import TwoChoice from "../components/TwoChoice";
import SpoonacularContext from "../context/SpoonacularContext";
import { useUploadToFirestore } from "../firestoreHooks/useUpload";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styles from "../styles";
import CardsSamples from "../utilities/cards/CardsSamples";

const FavMeals = () => {
  const { uploadFavMeals, uploadBuyinglist } = useUploadToFirestore();
  const { user, dispatch, buyinglist } = useContext(SpoonacularContext);
  const [filterState, setFilterState] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Vegetarian: false,
    Vegan: false,
  });
  const [selectedCount, setSelectedCount] = useState("1 Meal");
  const { width, height } = useWindowDimensions();
  const [searchText, setSearchText] = useState("");
  const [filteredMeals, setFilteredMeals] = useState();
  const [twoChoice, setTwoChoice] = useState("first");

  const navigate = useNavigate();

  // check signed in
  useEffect(() => {
    const auth = getAuth();
    if (!auth.currentUser) {
      navigate("/signIn");
    }
  }, []);

  // setFilteredMeals
  useEffect(() => {
    setFilteredMeals(user.favoriteMeals);
  }, [user.favoriteMeals]);

  // when changes call search + tag filter function
  useEffect(() => {
    if (user.favoriteMeals) {
      setFilteredMeals(tagfilter(searchFilter()));
    }
  }, [searchText, selectedFilter, user.favoriteMeals]);

  // functionality of search filter
  const searchFilter = () => {
    let searchFilteredMeals;
    let re = new RegExp(searchText, "i");
    searchFilteredMeals = user.favoriteMeals.filter((meal) =>
      meal.mealinformation.title.match(re)
    );
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

  // random meal import
  const handleRemoveFavMeal = (id) => {
    // favoriteMeals for local update (shortterm)
    // favMeals for global update (longterm)
    user.favoriteMeals = user.favoriteMeals.filter(
      (meal) => meal.mealinformation.id !== id
    );
    const favMeals = user.favMeals.filter((mealId) => mealId !== id);
    dispatch({
      type: "UPDATE_FAVMEALS",
      payload: [...favMeals],
    });
    uploadFavMeals(favMeals);
  };

  // console.log(buyinglist)
  const handleBuyinglist = (id, fullMealInfo) => {
    const alreadyExists = buyinglist.filter((meal) =>
      Object.keys(meal).includes(fullMealInfo.mealinformation.title)
    ).length;

    if (buyinglist.length < 6) {
      if (alreadyExists === 0) {
        const buyinglistIngredients = {
          [fullMealInfo.mealinformation.title]: fullMealInfo.ingredients.map(
            (ing) => {
              return {
                name: ing.name,
                amount: ing.measures.amount,
                unitShort: ing.measures.unitShort,
              };
            }
          ),
        };
        buyinglist.push(buyinglistIngredients);
        dispatch({ type: "UPDATE_BUYINGLIST", payload: buyinglist });
        uploadBuyinglist(buyinglist);
        toast.success("🍕 New Meal and Ingredient added to buyinglist");
      } else {
        toast.info("🍔 Meal already exists");
      }
    } else {
      toast.info(
        "🍓 You reached the maximum number of Meals in your Buyinglist"
      );
    }
  };

  const handleTwoChoice = (msg) => setTwoChoice(msg);

  return (
    <div className="w-full h-full overflow-scroll flex flex-col gap-y-3">
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

      {/* 1 vs 3 */}

      <TwoChoice
        callbackTwoChoice={handleTwoChoice}
        firstChoice="1 Meal"
        secondChoice="3 Meals"
      />

      {twoChoice === "first" ? (
        <FavMealsOne
          filteredMeals={filteredMeals}
          callbackRemoveFavMeal={handleRemoveFavMeal}
          callbackBuyinglist={handleBuyinglist}
        />
      ) : (
        "3 Meals"
      )}

      {/* 3 Meals */}
      <div
        className={`${
          selectedCount === "3 Meals" ? "1400:grid flex" : "hidden"
        } gap-2 grid-cols-2 flex-wrap w-full px-6 500:px-10 overflow-scroll 300:gap-5 600:gap-6 justify-center max-w-[1350px]`}
      >
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <CardsSamples type="three" />
        <div
          onClick={() => navigate("/creation")}
          className={`absolute  ${
            height > 600 && width > 767 ? "top-[88%]" : "top-[78%]"
          } left-[74%] 600:left-[84%] btnPrimaryCol buttonShadow hover:bg-[#293D2B] w-14 h-14 600:w-20 600:h-20 z-30 rounded-full ${
            styles.flexCenter
          } z-[80] cursor-pointer`}
        >
          <FaPlus
            size={width > 600 ? "25px" : "20px"}
            className="text-lightTextCol"
          />
        </div>
        {/* puffer */}
        <div className="h-24 600:h-28 w-full"></div>
      </div>
    </div>
  );
};

export default FavMeals;
