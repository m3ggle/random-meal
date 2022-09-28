import { useState } from "react";
import { useDownloadFromFirestore } from "../firestoreHooks/useDownloadFromFirestore";
import { useGetMeals } from "./useGetMeals";
import { useLikeStatus } from "./useLikeStatus";

export const useGetMealsTry = () => {
  const { singleFavMeals, comboMeals, singleMeals } = useLikeStatus();
  const {
    getTenFavCombos,
    getTenCombosFromCollection,
    getTenFavMeals,
    getTenMealsFromCollection,
    getMealsById,
  } = useDownloadFromFirestore();
  // const { handleGetMeals } = useGetMeals();
  const [pagenation, setPagenation] = useState({
    favMealsStartAfter: 0,
    favCombosStartAfter: 0,
    CombosStartAfter: 0,
    SingleMealsStartAfter: 0,
  });

  const filterOut = (mealsContext, mealIds) => {
    // mealIds can also be comboIds and mealsContext can also be comboContext
    if (mealIds?.length > 0) {
      const missingMeals = mealIds.filter(
        (mealId) => !Object.keys(mealsContext).includes(mealId.toString())
      );
      return missingMeals;
    } else {
      return mealIds
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
        missingMeals = filterOut(mealContext, favMeals);
        meals = await getTenFavMeals(missingMeals);
        // like
        meals = singleFavMeals(meals);
      } else if (type === "collection") {
        meals = await getTenMealsFromCollection();
        // like
        meals = singleMeals(meals, favMeals);
        // get all the ids
        const mealIds = meals.map((meal) => {
          return meal.mealinformation.id;
        });
        // filter out
        let missingMeals = filterOut(mealContext, mealIds);
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
      const missingMealIds = filterOut(mealContext, mealIds);

      // get meal information
      let missingMeals = await getMealsById(missingMealIds);

      // like stuff single Meals
      missingMeals = singleMeals(missingMeals, favMeals);

      // meals Formatter
      const formattedMeals = mealContextFormatter(missingMeals);

      // get all combo ids
      const comboIds = combos.map((combo) => {
        return combo.comboId;
      });

      // filter out combos
      const missingComboIds = filterOut(comboContext, comboIds);

      // filterOut allready existing combos
      combos = combos.filter((combo) =>
        missingComboIds.includes(combo.comboId)
      );

      // combo like
      combos = comboMeals(combos, favCombos);

      // combo formatter
      const formattedCombos = comboContextFormatter(combos);

      return { formattedCombos, formattedMeals };
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMealsCombos = async (meals, combos, favMeals, favCombos, type) => {
    let typeForHandleMeals, typeForHandleCombos;
    if (type === "favorite") {
      typeForHandleMeals = "favMeals"
      typeForHandleCombos = "favCombos"
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
    let formattedCollectedMeals = {...firstMeals};
    Object.keys(secondMeals).map(meal => {
      if (formattedCollectedMeals[meal] === undefined) {
        formattedCollectedMeals[meal] = secondMeals[meal]
      }
    })

    return { formattedCollectedMeals, formattedCombos };
  };

  return {
    handleMeals,
    handleCombos,
    handleGetMealsCombos,
    filterOut,
    mealContextFormatter,
    comboContextFormatter,
  };
};