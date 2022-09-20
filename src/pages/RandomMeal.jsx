import React, { useState } from "react";
import Card0T640 from "../utilities/HomeCards0T640";
// import Card640T1280 from "../utilities/HomeCards640T1280"
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { getRandomDayMeal } from "../context/SpoonacularAction";
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import useCleanUp from "../hooks/useCleanUp";
import Card1280 from "../utilities/HomeCards1280";

const RandomMeal = () => {
  const { cleanUpMeals } = useCleanUp();
  const { dispatch, allMealIds, spoonacularResult } =
    useContext(SpoonacularContext);

  const storeInDb = async (result) => {
    try {
      let missingIds = [];
      const missingMeals = result.filter((meal) => {
        if (!allMealIds.includes(meal.mealinformation.id)) {
          missingIds.push(meal.mealinformation.id);
          return meal;
        }
      });
      missingIds.push(...allMealIds);

      if (missingMeals.length > 0) {
        await Promise.all([
          missingMeals.map((meal) => {
            return setDoc(
              doc(db, "meals", meal.mealinformation.id.toString()),
              { ...meal }
            );
          }),
          setDoc(
            doc(db, "meals", "ids"),
            { allMealIds: [...missingIds] },
            { merge: true }
          ),
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const callbackClickedButton = async () => {
    const fetchResult = await getRandomDayMeal();
    const cleanedUpMeals = cleanUpMeals(fetchResult);
    dispatch({
      type: "UPDATE_RANDOM_MEALS",
      payload: [ ...cleanedUpMeals ],
    });
    storeInDb(cleanedUpMeals);
  };

  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      <Card0T640
        data={spoonacularResult}
        callbackButton={callbackClickedButton}
      />
      <Card1280
        data={spoonacularResult}
        callbackButton={callbackClickedButton}
      />
    </div>
  );
};

export default RandomMeal;
