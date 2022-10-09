import { toast } from "react-toastify";
import { useBuyinglistContext } from "../../../context/buyinglist/buyinglistContext";
import { useUploadToFirestore } from "../../../firestoreHooks/useUploadToFirestore";

export const useAddAndRemove = () => {
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();
  const { uploadBuyinglist } = useUploadToFirestore();

  const handleAdd = (newIngredient) => {
    const ingName = newIngredient.ingredient.text;
    const ingAmount = newIngredient.amount.text;
    const ingUnit = newIngredient.unit.text;
      
      let created = false;
      const ingredientObj = {
      name: ingName,
      amount: parseInt(ingAmount),
      unitShort: ingUnit,
    };
    if (newIngredient.correctness) {
      if (buyinglist.length <= 5) {
        buyinglist.some((meal, index) => {
          if (meal["Others"]) {
            // others exist
            buyinglist[index][Object.keys(meal)].push(ingredientObj);
            created = true;
          }
        });
        if (!created) {
          buyinglist.push({
            Others: [ingredientObj],
          });
          created = true;
        }
      } else {
        toast.info(
          "🍓 You reached the maximum number of Meals in your Buyinglist"
        );
      }
    }

    if (created) {
      dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: buyinglist });
      uploadBuyinglist(buyinglist);
    }
  };

    const handleDelete = ({ mealName, ingredientName }) => {
      let updatedMeal;
      const newBuyinglist = buyinglist.filter((meal) => {
        if (Object.keys(meal)[0] === mealName) {
          if (ingredientName !== undefined) {
            // delete ingredient
            let ings = meal[Object.keys(meal)[0]].filter((ingredient) => {
              if (ingredient.name === ingredientName) {
                return false;
              } else if (ingredient.name !== ingredientName) {
                return true;
              }
            });
            updatedMeal = { [Object.keys(meal)[0]]: [...ings] };
            return false;
          } else if (ingredientName === undefined) {
            // delete meal
            return false;
          }
        } else {
          return true;
        }
      });
      if (ingredientName !== undefined) {
        newBuyinglist.push(updatedMeal);
      }

      dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
      uploadBuyinglist(newBuyinglist);
    };

  return { handleAdd, handleDelete };
};
