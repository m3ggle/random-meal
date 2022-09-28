import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase.config";
import { useGetMeals } from "./useGetMeals";
import { useLikeStatus } from "./useLikeStatus";

export const useGetMealsTry = () => {
  const { singleFavMeals, comboFavMeals, singleMeals } = useLikeStatus();
  const { handleGetMeals } = useGetMeals();
  const [pagenation, setPagenation] = useState({
    favMealsStartAfter: 0,
    favCombosStartAfter: 0,
    CombosStartAfter: 0,
    SingleMealsStartAfter: 0,
  });

  // Todo: take in full meals and give back the missing meals
  const filterOut = (mealsContext, mealIds) => {
    // mealIds can also be comboIds
    // mealsContext can also be comboContext
    const missingMeals = mealIds.filter(
      (mealId) => !Object.keys(mealsContext).includes(mealId.toString())
    );
    return missingMeals;
  };

  const converter = () => {
    // takes in combos and gives back an array of mealIds
  };

  const mealContextFormat = (meals) => {
    let format = {};
    meals.map((meal) => {
      format[meal.mealinformation.id.toString()] = meal;
    });
    return format;
  };

  const handleFavMeals = async (mealsContext, mealIds) => {
    try {
      // filter
      let missingMeals = filterOut(mealsContext, mealIds);

      // outsource the getting of meals
      let meals = [];
      missingMeals = missingMeals.slice(0, 10);
      if (missingMeals.length > 0) {
        const getTenMeals = query(
          collection(db, "meals"),
          where("mealinformation.id", "in", missingMeals),
          limit(10)
        );
        const querySnapshot = await getDocs(getTenMeals);
        querySnapshot.forEach((doc) => {
          meals.push(doc.data());
        });
      }

      // like
      meals = singleFavMeals(meals);

      // Todo: pagenation
      // setPagenation(9)

      // corrected format
      meals = mealContextFormat(meals);

      return meals;
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavCombos = async (
    mealContext,
    comboContext,
    comboIds,
    usersFavMeals
  ) => {
    try {
      let combos = [];
      let correctCombos = [];
      let mealsForContext = [];

      // stuff
      if (comboIds.length > 0) {
        // get ten combos which the user likes from firestore
        const getTenCombos = query(
          collection(db, "combos"),
          where("comboId", "in", comboIds),
          limit(10)
        );
        const querySnapshot = await getDocs(getTenCombos);
        querySnapshot.forEach((doc) => {
          combos.push(doc.data());
          correctCombos.push(doc.data());
        });

        // get the meals out of the combos
        // befor only ids
        // after full fletched meals with all the information
        let allComboMeals;
        await Promise.all(
          combos.map((combo) => {
            return handleGetMeals(combo.allIds);
          })
        ).then((comboResult) => {
          allComboMeals = comboResult;
        });

        // all combo meals in one array
        allComboMeals.map((comboMeals) => {
          comboMeals.map((meal) => {
            mealsForContext.push(meal);
          });
        });

        // replace the ids of breakfast, lunch, dinner with the mealinformation of the respective meal
        combos.map((combo, index) => {
          combo.breakfast = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.breakfast
          );
          combo.lunch = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.lunch
          );
          combo.dinner = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.dinner
          );
        });

        // currently the breakfast, ..., are wrapped inside a unnecessary array
        combos.map((combo) => {
          combo.breakfast = { ...combo.breakfast[0] };
          combo.lunch = { ...combo.lunch[0] };
          combo.dinner = { ...combo.dinner[0] };
        });
      }

      // like
      // todo: make useLikeStatus for combos more reusable
      combos = comboFavMeals(combos, usersFavMeals);

      // filter out meals
      let mealIds = [];
      combos.map((combo) => {
        mealIds.push(...combo.allIds);
      });

      // get all missing meals
      const missingMealIds = filterOut(mealContext, mealIds);
      let missingMeals = mealsForContext.filter((meal) =>
        missingMealIds.includes(meal.mealinformation.id)
      );

      // get missing meals
      // let allComboMeals;
      // await Promise.all(
      //   combos.map((combo) => {
      //     return handleGetMeals(combo.allIds);
      //   })
      // ).then((comboResult) => {
      //   allComboMeals = comboResult;
      // });

      // Then do the like stuff

      // make missing meals context ready
      missingMeals = mealContextFormat(missingMeals);

      // filter out combos
      console.log(combos);
      const missingCombos = filterOut(comboContext, comboIds);

      return { missingCombos, missingMeals };
    } catch (error) {
      console.log(error);
    }
  };

  const handleCatalogMeals = async (mealContext, favMeals) => {
    try {
      let meals = [];

      // get from firestore
      const collectionRef = collection(db, "meals");
      const q = query(collectionRef, limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        meals.push(doc.data());
      });

      // get all the ids
      const mealIds = meals.map((meal) => {
        return meal.mealinformation.id;
      });

      // filter out
      let missingMeals = filterOut(mealContext, mealIds);
      meals = meals.filter((meal) =>
        missingMeals.includes(meal.mealinformation.id)
      );

      // like
      meals = singleMeals(meals, favMeals);

      // format
      meals = mealContextFormat(meals);

      return meals;
    } catch (error) {
      console.log(error);
    }
  };

  const handleShareCombos = async (
    mealContext,
    comboContext,
    comboIds,
    favMeals
  ) => {
    try {
      let combos = [];

      // get from firestore
      const collectionRef = collection(db, "combos");
      const q = query(collectionRef, limit(10));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        combos.push(doc.data());
      });

      // get meal information inside the combos
      let allComboMeals;
      await Promise.all(
        combos.map((combo) => {
          return handleGetMeals(combo.allIds);
        })
      ).then((comboResult) => {
        allComboMeals = comboResult;
      });

      // like
      let likedMeals = [];
      allComboMeals.map((mealsInsideCombo) => {
        likedMeals.push(singleMeals(mealsInsideCombo, favMeals));
      });

      // replace the ids of breakfast, lunch, dinner with the mealinformation of the respective meal
      combos.map((combo, index) => {
        combo.breakfast = likedMeals[index].filter(
          (meal) => meal.mealinformation.id === combo.breakfast
        );
        combo.lunch = likedMeals[index].filter(
          (meal) => meal.mealinformation.id === combo.lunch
        );
        combo.dinner = likedMeals[index].filter(
          (meal) => meal.mealinformation.id === combo.dinner
        );
      });

      // Todo: combo liked or not

      // currently the breakfast, ..., are wrapped inside a unnecessary array
      combos.map((combo) => {
        combo.breakfast = { ...combo.breakfast[0] };
        combo.lunch = { ...combo.lunch[0] };
        combo.dinner = { ...combo.dinner[0] };
      });

      // get all mealids for filter out
      let mealIds = [];
      likedMeals.map((combo) => {
        console.log(combo);
        // mealIds.push(...combo.allIds);
      });
      console.log(mealIds);

      const missingMealIds = filterOut(mealContext, mealIds);
      // meals = singleMeals(missingMeals, favMeals);
      // console.log(meals)

      // filter out combos
      combos = filterOut(comboContext, comboIds);

      return combos;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleFavMeals,
    handleFavCombos,
    handleCatalogMeals,
    handleShareCombos,
  };
};
