import { useDownloadFromFirestore } from "../../../firestoreHooks/useDownloadFromFirestore";

export const useGetMeal = () => {
  const { getSingleMealById } = useDownloadFromFirestore();

  const getMeal = async (mealContext, id) => {
    if (mealContext[id]) {
      return mealContext[id];
    }
      console.log("does not exist in the context")
    const firestoreResult = await getSingleMealById(id);
    if (firestoreResult) {
      return firestoreResult;
    } else {
      return undefined;
    }
  };

  return { getMeal };
};
