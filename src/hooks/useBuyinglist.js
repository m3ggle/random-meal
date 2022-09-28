import { toast } from "react-toastify";
import { useUploadToFirestore } from "../firestoreHooks/useUploadToFirestore";

export const useBuyinglist = () => {
  const { uploadBuyinglist } = useUploadToFirestore();

  const handleBuyinglist = ({buyinglist, title, ingredients}) => {
    const alreadyExists = buyinglist.filter((meal) =>
      Object.keys(meal).includes(title)
    ).length;

    if (buyinglist.length < 6) {
      if (alreadyExists === 0) {
        const buyinglistIngredients = {
          [title]: ingredients.map(
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
        uploadBuyinglist(buyinglist);
        toast.success("🍕 New Meal and Ingredient added to buyinglist");
        return buyinglist;
      } else {
        toast.info("🍔 Meal already exists");
      }
    } else {
      toast.info(
        "🍓 You reached the maximum number of Meals in your Buyinglist"
      );
    }
  };

  return { handleBuyinglist };
};
