import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";
import React, { useContext, useState } from "react";
import { getRandomDayMeal } from "../context/SpoonacularAction";
import SpoonacularContext from "../context/SpoonacularContext";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";
import useCleanUp from "../hooks/useCleanUp";
import { useGetMeals } from "../hooks/useGetMeals";
import { useLikeStatus } from "../hooks/useLikeStatus";
import HomeCards0T640 from "../utilities/HomeCards0T640";

const RandomMeal = () => {
  const { cleanUpMeals } = useCleanUp();
  const { user, meals, dispatch, allMealIds } = useContext(SpoonacularContext);
  const { storeInDb } = useUploadToFirestore();
  const { singleMeals } = useLikeStatus();
  const { filterOutMeals, mealContextFormatter } = useGetMeals();
  const [spoonResults, setspoonResults] = useState([77188, 580283, 596149]);

  const auth = getAuth();
  // singleMeals is for checking if the meals are liked by the user
  const callbackClickedButton = async () => {
    const fetchResult = await getRandomDayMeal();
    const cleanedUpMeals = cleanUpMeals(fetchResult);
    const filteredOutMeals = filterOutMeals(meals, cleanedUpMeals);
    const internalMeals = auth
      ? singleMeals(filteredOutMeals, user.favMeals)
      : filteredOutMeals;
    const formattedMeals = mealContextFormatter(internalMeals);
    dispatch({
      type: "UPDATE_MEALS",
      payload: { ...formattedMeals },
    });
    storeInDb(cleanedUpMeals, allMealIds);
    setspoonResults(getAllIds(cleanedUpMeals));
  };

  const getAllIds = (meals) => {
    return meals.map((meal) => {
      return meal.mealinformation.id;
    });
  };

  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      <Helmet>
        <title>Random Meal</title>
        <meta name="description" content="" />
      </Helmet>
      <HomeCards0T640
        meals={meals}
        data={spoonResults}
        callbackButton={callbackClickedButton}
      />
    </div>
  );
};

export default RandomMeal;
