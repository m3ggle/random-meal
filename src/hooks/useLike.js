import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUploadToFirestore } from "../firestoreHooks/useUpload";

export const useLike = () => {
  const { uploadFavMeals } = useUploadToFirestore();
  const navigate = useNavigate();

  const handleHeart = (user, likeState, meal) => {
    const auth = getAuth();
    if (auth.currentUser) {
      if (likeState === true) {
        return handleRemoveFavMeal(user, meal, meal.mealinformation.id);
      } else if (likeState === false) {
        return handleLikeFavMeal(user, meal, meal.mealinformation.id);
      }
    } else {
      toast.error("😤 Not logged in");
    }
  };

  const handleLikeFavMeal = (user, meal, id) => {
    meal.liked = true;
    user.favMeals.push(id);
    user.favoriteMeals.push(meal);
    uploadFavMeals(user.favMeals);
    return { userInfo: user, mealInfo: meal };
  };

  const handleRemoveFavMeal = (user, meal, id) => {
    // favoriteMeals for local update (shortterm)
    // favMeals for global update (longterm)
    meal.liked = false;
    user.favoriteMeals = user.favoriteMeals.filter(
      (meal) => meal.mealinformation.id !== id
    );
    user.favMeals = user.favMeals.filter((mealId) => mealId !== id);
    uploadFavMeals(user.favMeals);
    return { userInfo: user, mealInfo: meal };
  };

  return { handleHeart, handleLikeFavMeal, handleRemoveFavMeal };
};
