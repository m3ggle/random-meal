import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { useGetMealsTry } from "../hooks/useGetMeals";

export const useUploadToFirestore = () => {
  const {filterOutMeals} = useGetMealsTry()

  const uploadFavMeals = async (favMeals) => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          {
            favMeals: favMeals,
          },
          { merge: true }
        );
      } else {
        toast.error("😤 Not logged in");
      }
    } catch (error) {
      console.log(error);
      toast.error("🍅 Could not upload the Update");
    }
  };

  const uploadBuyinglist = async (buyinglist) => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          {
            buyinglist: buyinglist,
          },
          { merge: true }
        );
      } else {
        toast.error("😤 Not logged in");
      }
    } catch (error) {
      toast.error("🍅 Could not upload the Update");
    }
  };

    const storeInDb = async (result, allMealIds) => {
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

  return { uploadFavMeals, uploadBuyinglist, storeInDb };
};
