import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useMealContext } from "../context/meals/MealContext";
import { db } from "../firebase.config";

export const useUploadToFirestore = () => {
  const { dispatchMeal } = useMealContext();
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

  const uploadFavCombos = async (favCombos) => {
    try {
      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(
          doc(db, "users", auth.currentUser.uid),
          {
            favCombos: favCombos,
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

  const uploadCombo = async (combo) => {
    try {
      combo.liked !== undefined && delete combo.liked;

      const auth = getAuth();
      if (auth.currentUser) {
        await setDoc(doc(db, "combos", combo.comboId), combo);
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
      let meals = [];

      // get all meals, meals which are not yet stored in the db will give back undefined
      await Promise.all([
        getDoc(doc(db, "meals", allMealIds[0].toString())),
        getDoc(doc(db, "meals", allMealIds[1].toString())),
        getDoc(doc(db, "meals", allMealIds[2].toString())),
      ]).then((values) => {
        values.map((meal) => {
          meals.push(meal.data());
        });
      });

      // get all the indexes of missing meals
      let missingMealIds = [];
      meals.map((potentialMeal, index) => {
        potentialMeal === undefined && missingMealIds.push(allMealIds[index]);
      });

      // filtered whole meals
      let filteredMeals = []
      Object.values(result).map((meal) => {
        if (missingMealIds.includes(meal.mealinformation.id)) {
          filteredMeals.push({
            [meal.mealinformation.id]: {
              ...meal
            }
          })
        }
      });

      console.log(result)
      console.log(filteredMeals)

      // upload meals
      await Promise.all([
        filteredMeals.map((meal) => {
          return setDoc(
            doc(db, "meals", (meal[Object.keys(meal)[0]].mealinformation.id).toString()),
            meal[Object.keys(meal)[0]]
          );
        }),
      ])

    } catch (error) {
      console.log(error);
    }
  };

  return {
    uploadFavMeals,
    uploadBuyinglist,
    storeInDb,
    uploadFavCombos,
    uploadCombo,
  };
};
