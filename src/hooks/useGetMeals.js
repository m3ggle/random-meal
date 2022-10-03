import { useState } from "react";
import { toast } from "react-toastify";
import { useDownloadFromFirestore } from "../firestoreHooks/useDownloadFromFirestore";
import { useLikeStatus } from "./useLikeStatus";

export const useGetMeals = () => {
  const { singleFavMeals, comboMeals, singleMeals } = useLikeStatus();
  const {
    getTenFavCombos,
    getTenCombosFromCollection,
    getTenFavMeals,
    getTenMealsFromCollection,
    getMealsById,
  } = useDownloadFromFirestore();
  const [pagenation, setPagenation] = useState({
    favMealsStartAfter: {
      // like the name says, it is a copy of favMeals (if favMeals changes this state will not be effected)
      favMealsRemaining: [],
      // storing all favMeals which are already in the mealContext
      storingFavMeals: [],
    },
    favCombosStartAfter: 0,
    CombosStartAfter: 0,
    SingleMealsStartAfter: 0,
  });

  const filterOutIds = (mealsContext, mealIds) => {
    // mealIds can also be comboIds and mealsContext can also be comboContext
    if (mealIds?.length > 0) {
      const missingMeals = mealIds.filter(
        (mealId) => !Object.keys(mealsContext).includes(mealId.toString())
      );
      return missingMeals;
    } else {
      return mealIds;
    }
  };

  const filterOutMeals = (mealsContext, meals) => {
    if (meals?.length > 0) {
      const missingMeals = meals.filter(
        (meal) =>
          !Object.keys(mealsContext).includes(
            meal.mealinformation.id.toString()
          )
      );
      return missingMeals;
    } else {
      return meals;
    }
  };

  const mealContextFormatter = (meals) => {
    let format = {};
    meals.map((meal) => {
      format[meal.mealinformation.id.toString()] = meal;
    });
    return format;
  };

  const comboContextFormatter = (combos) => {
    let format = {};
    combos.map((combo) => {
      format[combo.comboId] = combo;
    });
    return format;
  };

  const handleMeals = async (mealContext, favMeals, type) => {
    try {
      // filter
      let meals = [];
      let missingMeals = [];

      // get meals from firestore
      if (type === "favMeals") {
        // missingMeals = filterOutIds(mealContext, favMeals);
        // meals = await getTenFavMeals(missingMeals);
        // meals = singleFavMeals(meals);
        const { storingFavMeals, favMealsRemaining } =
          pagenation.favMealsStartAfter;
        // ! if sfm is empty (first time)
        if (storingFavMeals.length === 0 && favMealsRemaining.length === 0) {
          let storingFavMealsHolder = [];
          let deleteMealsfromStorage = [];

          // ! store in sfm if its not already in mealContext
          for (let i = 0; i <= 9; i++) {
            if (!Object.keys(mealContext).includes(favMeals[i].toString())) {
              storingFavMealsHolder.push(favMeals[i]);
            }
            deleteMealsfromStorage.push(favMeals[i]); //add mealId to later filter out
          }

          // ! download
          meals = await getTenFavMeals(storingFavMealsHolder); //download meals
          meals = singleFavMeals(meals); //like meals

          // ! get all favorite mealIds which are not touched
          const favMealCopyForState = favMeals.filter(
            (mealId) => !deleteMealsfromStorage.includes(mealId)
          );

          // ! update pagenation state
          // console.log("this should be the first time", storingFavMealsHolder);
          const favMealsStartAfterCopy = {
            favMealsRemaining: [...favMealCopyForState],
            storingFavMeals: [...storingFavMealsHolder],
          };
          setPagenation((prevState) => ({
            ...prevState,
            favMealsStartAfter: { ...favMealsStartAfterCopy },
          }));
        } else {
          // ! check if favMealsCopy is empty (all mealIds of favMeals are in mealContext)
          if (favMealsRemaining.length === 0 && favMeals.length !== 0) {
            toast.info("😋 You already have all your favorite Meals");
            return "";
          } else {
            let storingFavMealsHolder = [...storingFavMeals];
            let deleteMealsfromStorage = [...storingFavMeals];
            
            // ! check if mealId is in the mealContext (array: favMealsRemaining)
            let forForLoopCondition = true;
            console.log(
              "length of the remaining meals and should be amount of loops",
              favMealsRemaining.length
            );
            for (let i = 0; forForLoopCondition; i++) {
              if (
                !Object.keys(mealContext).includes(
                  favMealsRemaining[i].toString()
                )
              ) {
                missingMeals.push(favMealsRemaining[i]);
              }
              deleteMealsfromStorage.push(favMealsRemaining[i]);
              // condition to break loop
              if (10 <= missingMeals.length || i >= favMealsRemaining.length - 1) {
                forForLoopCondition = false;
              }
            }

            // for later when updating the state
            storingFavMealsHolder.push(...missingMeals);

            // ! download
            meals = await getTenFavMeals(missingMeals);
            meals = singleFavMeals(meals);

            // ! get all favorite mealIds which are not touched
            const favMealCopyForState = favMeals.filter(
              (mealId) => !deleteMealsfromStorage.includes(mealId)
            );

            // ! update pagenation favMealsRemaining
            // console.log(
            //   "in sfm something and this should be the second time",
            //   storingFavMealsHolder
            // );
            const favMealsStartAfterCopy = {
              favMealsRemaining: [...favMealCopyForState],
              storingFavMeals: [...storingFavMealsHolder],
            };
            setPagenation((prevState) => ({
              ...prevState,
              favMealsStartAfter: { ...favMealsStartAfterCopy },
            }));
          }
        }
      } else if (type === "collection") {
        meals = await getTenMealsFromCollection();
        // like
        meals = favMeals !== undefined ? singleMeals(meals, favMeals) : meals;
        // get all the ids
        const mealIds = meals.map((meal) => {
          return meal.mealinformation.id;
        });
        // filter out
        let missingMeals = filterOutIds(mealContext, mealIds);
        meals = meals.filter((meal) =>
          missingMeals.includes(meal.mealinformation.id)
        );
      }

      // corrected format
      const formattedMeals = mealContextFormatter(meals);

      return { formattedMeals };
    } catch (error) {
      console.log(error);
    }
  };

  const handleCombos = async (
    mealContext,
    comboContext,
    favMeals,
    favCombos,
    type
  ) => {
    try {
      let combos = [];

      // get combos from firestore
      if (type === "favCombos") {
        combos = await getTenFavCombos(favCombos);
      } else if (type === "collection") {
        combos = await getTenCombosFromCollection();
      }

      // filter out meals
      let mealIds = [];
      combos.map((combo) => {
        mealIds.push(...combo.allIds);
      });

      // get all missing meals
      const missingMealIds = filterOutIds(mealContext, mealIds);

      // get meal information
      let missingMeals = await getMealsById(missingMealIds);

      // like stuff single Meals
      missingMeals =
        favMeals !== undefined
          ? singleMeals(missingMeals, favMeals)
          : missingMeals;

      // meals Formatter
      const formattedMeals = mealContextFormatter(missingMeals);

      // get all combo ids
      const comboIds = combos.map((combo) => {
        return combo.comboId;
      });

      // filter out combos
      const missingComboIds = filterOutIds(comboContext, comboIds);

      // filterOutIds allready existing combos
      combos = combos.filter((combo) =>
        missingComboIds.includes(combo.comboId)
      );

      // combo like
      combos = favCombos !== undefined ? comboMeals(combos, favCombos) : combos;

      // combo formatter
      const formattedCombos = comboContextFormatter(combos);

      return { formattedCombos, formattedMeals };
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMealsCombos = async (
    meals,
    combos,
    favMeals,
    favCombos,
    type
  ) => {
    let typeForHandleMeals, typeForHandleCombos;
    if (type === "favorite" && favMeals !== undefined) {
      typeForHandleMeals = "favMeals";
      typeForHandleCombos = "favCombos";
    } else if (type === "collection") {
      typeForHandleMeals = "collection";
      typeForHandleCombos = "collection";
    }

    // get stuff
    const { formattedMeals: firstMeals } = await handleMeals(
      meals,
      favMeals,
      typeForHandleMeals
    );
    const { formattedMeals: secondMeals, formattedCombos } = await handleCombos(
      meals,
      combos,
      favMeals,
      favCombos,
      typeForHandleCombos
    );

    // filter
    let formattedCollectedMeals = { ...firstMeals };
    Object.keys(secondMeals).map((meal) => {
      if (formattedCollectedMeals[meal] === undefined) {
        formattedCollectedMeals[meal] = secondMeals[meal];
      }
    });

    return { formattedCollectedMeals, formattedCombos };
  };

  return {
    handleMeals,
    handleCombos,
    handleGetMealsCombos,
    filterOutIds,
    filterOutMeals,
    mealContextFormatter,
    comboContextFormatter,
  };
};
