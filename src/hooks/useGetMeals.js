import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

// get all favorite meals from firestore
export const useGetMeals = () => {
  // normal meals
  const handleGetMeals = async (mealIds) => {
    try {
      let meals = [];
      if (mealIds.length > 0) {
        const getTenMeals = query(
          collection(db, "meals"),
          where("mealinformation.id", "in", mealIds),
          limit(10)
        );
        const querySnapshot = await getDocs(getTenMeals);
        querySnapshot.forEach((doc) => {
          meals.push(doc.data());
        });
      }
      return meals;
    } catch (error) {
      console.log(error);
    }
  };

  // combo meals
  const handleGetCombos = async (comboIds) => {
    try {
      let combos = [];

      if (comboIds.length > 0) {
        // get ten combos which the user likes from firestore
        const getTenCombos = query(
          collection(db, "combos"),
          where("comboId", "in", comboIds),
          limit(10)
        );
        const querySnapshot = await getDocs(getTenCombos);
        querySnapshot.forEach((doc) => {
          combos.push(doc.data());
        });

        // get the meals out of the combos
        // befor only ids
        // after full fletched meals with all the information
        let allComboMeals;
        await Promise.all(
          combos.map((combo) => {
            return handleGetMeals(combo.allIds);
          })
        ).then((comboResult) => {
          allComboMeals = comboResult;
        });

        // replace the ids of breakfast, lunch, dinner with the mealinformation of the respective meal
        combos.map((combo, index) => {
          combo.breakfast = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.breakfast
          );
          combo.lunch = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.lunch
          );
          combo.dinner = allComboMeals[index].filter(
            (meal) => meal.mealinformation.id === combo.dinner
          );
        });

        // currently the breakfast, ..., are wrapped inside a unnecessary array
        combos.map((combo) => {
          combo.breakfast = { ...combo.breakfast[0] };
          combo.lunch = { ...combo.lunch[0] };
          combo.dinner = { ...combo.dinner[0] };
        });
      }

      return combos;
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetMeals, handleGetCombos };
};
