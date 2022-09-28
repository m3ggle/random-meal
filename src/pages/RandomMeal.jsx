import React from "react";
import Card0T640 from "../utilities/HomeCards0T640";
// import Card640T1280 from "../utilities/HomeCards640T1280"
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { getRandomDayMeal } from "../context/SpoonacularAction";
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import useCleanUp from "../hooks/useCleanUp";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";

const RandomMeal = () => {
  const { cleanUpMeals } = useCleanUp();
  const { user, dispatch, allMealIds, spoonacularResult, buyinglist } =
    useContext(SpoonacularContext);
  const auth = getAuth();
  const { uploadFavMeals, uploadBuyinglist } = useUploadToFirestore();

  useEffect(() => {}, [spoonacularResult]);

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
      meals.map((meal) => {
        user.favMeals.includes(meal.mealinformation.id)
          ? (meal.liked = true)
          : (meal.liked = false);
      });
    }
    return meals;
  };

  const callbackClickedButton = async () => {
    const fetchResult = await getRandomDayMeal();
    const cleanedUpMeals = cleanUpMeals(fetchResult);
    const internalMeals = checkFav(cleanedUpMeals);
    dispatch({
      type: "UPDATE_RANDOM_MEALS",
      payload: [...internalMeals],
    });
    if (auth.currentUser) {
      storeInDb(cleanedUpMeals);
    }
  };

  const handleAddFavMeal = (id, meal) => {
    spoonacularResult.map((meals) => {
      if (meals.mealinformation.id === id) {
        meals.liked = true;
      }
    });
    dispatch({ type: "UPDATE_RANDOM_MEALS", payload: [...spoonacularResult] });

    // updating favMeals
    user.favMeals.push(id);
    user.favoriteMeals.push(meal);
    dispatch({
      type: "UPDATE_USER_INFORMATION",
      payload: { ...user },
    });
    uploadFavMeals(user.favMeals);
  };

  const handleRemoveFavMeal = (id) => {
    spoonacularResult.map((meals) => {
      if (meals.mealinformation.id === id) {
        meals.liked = false;
      }
    });
    dispatch({ type: "UPDATE_RANDOM_MEALS", payload: [...spoonacularResult] });

    // updating favMeals
    user.favoriteMeals = user.favoriteMeals.filter(
      (meal) => meal.mealinformation.id !== id
    );
    user.favMeals = user.favMeals.filter((mealId) => mealId !== id);
    dispatch({
      type: "UPDATE_USER_INFORMATION",
      payload: { ...user },
    });
    uploadFavMeals(user.favMeals);
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

  return (
    <div className="w-full h-screen bg-bgPrimaryCol flex justify-evenly ">
      <Card0T640
        data={spoonacularResult}
        callbackAddFavMeal={handleAddFavMeal}
        callbackRemoveFavMeal={handleRemoveFavMeal}
        callbackButton={callbackClickedButton}
        callbackBuylist={handleBuyinglist}
      />
    </div>
  );
};

export default RandomMeal;
