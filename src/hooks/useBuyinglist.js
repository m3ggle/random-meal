import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";

export const useBuyinglist = () => {
  const { uploadBuyinglist } = useUploadToFirestore();

  const handleBuyinglist = ({ buyinglist, title, ingredients }) => {
    const auth = getAuth();

    const alreadyExists = buyinglist.filter((meal) =>
      Object.keys(meal).includes(title)
    ).length;

    if (buyinglist.length < 6) {
      if (alreadyExists === 0) {
        const buyinglistIngredients = {
          [title]: ingredients.map((ing) => {
            return {
              name: ing.name,
              amount: ing.measures.amount,
              unitShort: ing.measures.unitShort,
            };
          }),
        };
        buyinglist.push(buyinglistIngredients);
        if (auth.currentUser) {
          uploadBuyinglist(buyinglist);
        }
        toast.success("🍕 New Meal and Ingredient added to buyinglist");
      } else {
        toast.info("🍔 Meal already exists");
      }
    } else {
      toast.info(
        "🍓 You reached the maximum number of Meals in your Buyinglist"
      );
    }

    return buyinglist;
  };

  const handleBuyinglistCombo = ({ buyinglist, mealsInCombo }) => {
    const auth = getAuth();

    mealsInCombo.map((mealFull) => {
      const alreadyExists = buyinglist.filter((meal) =>
        Object.keys(meal).includes(mealFull.mealinformation.title)
      ).length;

      if (buyinglist.length < 6) {
        if (alreadyExists === 0) {
          const buyinglistIngredients = {
            [mealFull.mealinformation.title]: mealFull.ingredients.map(
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
          if (auth.currentUser) {
            uploadBuyinglist(buyinglist);
          }
          toast.success("🍕 New Meal and Ingredient added to buyinglist");
        } else {
          toast.info("🍔 Meal already exists");
        }
      } else {
        toast.info(
          "🍓 You reached the maximum number of Meals in your Buyinglist"
        );
      }
    });

    return buyinglist;
  };

  const handleIngredient = ({ ...take }) => {
    const {
      ing,
      ingIndex,
      ingId,
      ingName,
      ingAmount,
      ingUnit,
      meal,
      buyinglist,
      specificBuyinglist,
    } = take;
    const { mealinformation } = meal;

    // ! Test start (cleaner + leaner)
    // const alreadyExists = buyinglist.filter((meal) =>
    //   Object.keys(meal).includes(mealinformation.title)
    // );

    // const auth = getAuth();

    // if (buyinglist.length < 6) {
    //   if (alreadyExists.length === 0) {
    //     const newMealInBuyinglist = {
    //       [mealinformation.title]: {
    //         name: ing.name,
    //         amount: ing.measures.amount,
    //         unitShort: ing.measures.unitShort,
    //       },
    //     };

    //     const newBuyinglist = buyinglist.concat(newMealInBuyinglist);
    //     if (auth.currentUser) {
    //       // uploadBuyinglist(newBuyinglist);
    //     }
    //     toast.success("🍕 New Meal and Ingredient added to buyinglist");
    //     return newBuyinglist;
    //   } else if (alreadyExists.length === 1) {
    //   }
    // }
    // ! Test end

    if (buyinglist.length > 0 && buyinglist.length < 6) {
      let created = false;
      buyinglist.some((mealObj, index) => {
        if (mealObj[mealinformation.title]) {
          // meal exists in buyinglist
          const ingredientExist = mealObj[mealinformation.title].filter(
            (ing) => ing.name === ingName
          );
          if (ingredientExist.length === 0) {
            buyinglist[index][mealinformation.title].push({
              name: ingName,
              amount: ingAmount,
              unitShort: ingUnit,
            });
            toast.success("🥦 New Ingredient added to buyinglist");
            uploadBuyinglist(buyinglist);
            created = true;
            return buyinglist;
          } else {
            toast.info("🍆 Ingredient already exists");
            created = true;
            return buyinglist;
          }
        }
      });
      if (!created) {
        // there is space left in the buyinglist and the meal does not exists in it
        const mealForBuyinglist = {
          [mealinformation.title]: [
            {
              name: ingName,
              amount: ingAmount,
              unitShort: ingUnit,
            },
          ],
        };
        buyinglist.push(mealForBuyinglist);
        toast.success("🍩 New Meal and Ingredient added to buyinglist");
        uploadBuyinglist(buyinglist);
        return buyinglist;
      }
    } else if (buyinglist.length >= 5) {
      toast.info(
        "🍓 You reached the maximum number of Meals in your Buyinglist"
      );
    } else if (buyinglist.length === 0) {
      // first meal in buyinglist
      const buyinglist = [
        {
          [mealinformation.title]: [
            {
              name: ingName,
              amount: ingAmount,
              unitShort: ingUnit,
            },
          ],
        },
      ];
      toast.success("🍕 New Meal and Ingredient added to buyinglist");
      uploadBuyinglist(buyinglist);
      return buyinglist;
    }

    // update specificBuyinglist
    let list = specificBuyinglist;
    list[ingIndex].inShoppingCart = true;
    return { newBuyinglist: buyinglist, newSpecificBuyinglist: [...list] };
  };

  return { handleBuyinglist, handleBuyinglistCombo, handleIngredient };
};
