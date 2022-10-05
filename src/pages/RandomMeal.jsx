import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getRandomDayMeal } from "../context/SpoonacularAction";
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";
import useCleanUp from "../hooks/useCleanUp";
import { useGetMeals } from "../hooks/useGetMeals";
import { useLikeStatus } from "../hooks/useLikeStatus";
import HomeCards0T640 from "../utilities/HomeCards0T640";

const RandomMeal = () => {
  const { cleanUpMeals } = useCleanUp();
  const { user, meals, dispatch, allMealIds, pagenation } =
    useContext(SpoonacularContext);
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

  useEffect(() => {
    // navbar
    dispatch({ type: "UPDATE_NAVBARSTATUS", payload: true });
  }, []);

  // const testDrive = async () => {
  //   const results = await getTenMealsFromCollection();
  //   console.log(results);
  // };

  const [pagenationState, setPagenationState] = useState();
  const getTenMealsFromCollection = async () => {
    let meals = [];
    let nextMeals = [];

    // normal
    // const collectionRef = collection(db, "meals");
    // const q = query(collectionRef, limit(10));
    // const querySnapshot = await getDocs(q);

    // querySnapshot.forEach((doc) => {
    //   meals.push(doc.data());
    // });
    // console.log(meals);

    // // startafter stuff
    // const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    // const next = query(
    //   collection(db, "meals"),
    //   startAfter(lastVisible),
    //   limit(12)
    // );

    // const nextQuerySnapshot = await getDocs(next);
    // nextQuerySnapshot.forEach((doc) => {
    //   nextMeals.push(doc.data());
    // });
    // console.log(nextMeals);

    if (pagenation.singleMealsStartAfter.lastVisible === 0) {
      const collectionRef = collection(db, "meals");
      const q = query(collectionRef, limit(10));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        meals.push(doc.data());
      });
      console.log(meals);

      // store in context
      pagenation.singleMealsStartAfter.querySnapshot = querySnapshot;
      pagenation.singleMealsStartAfter.lastVisible =
        querySnapshot.docs[querySnapshot.docs.length - 1];
    } else if (pagenation.singleMealsStartAfter.lastVisible !== 0) {
      const next = query(
        collection(db, "meals"),
        startAfter(pagenation.singleMealsStartAfter.lastVisible),
        limit(12)
      );

      const nextQuerySnapshot = await getDocs(next);
      nextQuerySnapshot.forEach((doc) => {
        nextMeals.push(doc.data());
      });
      console.log(nextMeals);

      // store in context
      pagenation.singleMealsStartAfter.querySnapshot = nextQuerySnapshot;
      pagenation.singleMealsStartAfter.lastVisible =
        nextQuerySnapshot.docs[nextQuerySnapshot.docs.length - 1];
    }

    // return meals;
  };

  const getAllIds = (meals) => {
    return meals.map((meal) => {
      return meal.mealinformation.id;
    });
  };

  

  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      {/* <Helmet>
        <title>Random Meal</title>
        <meta name="description" content="" />
      </Helmet> */}
      {/* <div
        onClick={() => getTenMealsFromCollection()}
        className="w-11 h-6 bg-slate-400 rounded-xl"
      >
        Click me
      </div> */}
      <HomeCards0T640
        meals={meals}
        data={spoonResults}
        callbackButton={callbackClickedButton}
      />
    </div>
  );
};

export default RandomMeal;
