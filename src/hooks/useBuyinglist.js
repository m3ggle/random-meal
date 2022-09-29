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

    mealsInCombo.map(mealFull => {
      const alreadyExists = buyinglist.filter((meal) =>
        Object.keys(meal).includes(mealFull.mealinformation.title)
      ).length;
  
      if (buyinglist.length < 6) {
        if (alreadyExists === 0) {
          const buyinglistIngredients = {
            [mealFull.mealinformation.title]: mealFull.ingredients.map((ing) => {
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
    })


    return buyinglist;
  };

  return { handleBuyinglist, handleBuyinglistCombo };
};
