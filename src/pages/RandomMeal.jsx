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
import { getAuth } from "firebase/auth";
import { useGetMeals } from "../hooks/useGetMeals";

const RandomMeal = () => {
  const { cleanUpMeals } = useCleanUp();
  const { user, dispatch, allMealIds, spoonacularResult } =
    useContext(SpoonacularContext);
  const auth = getAuth();
  
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

  const checkFav = (meals) => {
    if (auth.currentUser) {
      meals.map(meal => {
        user.favMeals.includes(meal.mealinformation.id)
          ? (meal.liked = true)
          : (meal.liked = false);
      })
      console.log(meals)
    } 
    return meals
  }

  const callbackClickedButton = async () => {
    const fetchResult = await getRandomDayMeal();
    const cleanedUpMeals = cleanUpMeals(fetchResult);
    const internalMeals = checkFav(cleanedUpMeals);
    console.log(internalMeals)
    dispatch({
      type: "UPDATE_RANDOM_MEALS",
      payload: [...internalMeals],
    });
    if (auth.currentUser) {
      storeInDb(cleanedUpMeals);
    }
  };

  const handleAddFavMeal = () => {

  }

  const handleRemoveFavMeal = () => {

  }

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
      {/* <button
        onClick={handleClick}
        className="px-6 py-6 max-h-fit bg-bgSecondaryCol rounded-xl"
        type="button"
      >
        Click Me
      </button> */}
    </div>
  );
};

export default RandomMeal;
