import React, { useContext } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import SpoonacularContext from "../context/SpoonacularContext";
import { useUploadToFirestore } from "../firestoreHooks/useUpload";
import FavMealsOneCard from "../utilities/cards/FavMealsOneCard";
import Loading from "./Loading";

const FavMealsOne = ({ filteredMeals }) => {
  const { user, dispatch, buyinglist } = useContext(SpoonacularContext);
  const { uploadFavMeals, uploadBuyinglist } = useUploadToFirestore();

  const handleRemoveFavMeal = (id) => {
    // favoriteMeals for local update (shortterm)
    // favMeals for global update (longterm)
    const favoriteMeals = user.favoriteMeals.filter(
      (meal) => meal.mealinformation.id !== id
    );
    const favMeals = user.favMeals.filter((mealId) => mealId !== id);
    dispatch({
      type: "UPDATE_FAVMEALS_AND_FAVORITEMEALS",
      payload: {
        favMeals: [...favMeals],
        favoriteMeals: [...favoriteMeals],
      },
    });
    uploadFavMeals(favMeals);
  };

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
    <div
      className={`flex gap-2 flex-col md:flex-row md:flex-wrap w-full px-10 md:gap-6 justify-center max-w-[1350px]`}
    >
      {filteredMeals ? (
        <>
          {filteredMeals.map((favMeal) => (
            <FavMealsOneCard
              key={uuidv4()}
              meal={favMeal}
              callbackRemoveFavMeal={handleRemoveFavMeal}
              callbackBuylist={handleBuyinglist}
            />
          ))}
        </>
      ) : (
        <Loading />
      )}

      {/* puffer */}
      <div className="h-24 600:h-28 w-full"></div>
    </div>
  );
};

export default FavMealsOne;
