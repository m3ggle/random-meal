import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useBuyinglistContext } from "../../context/buyinglist/buyinglistContext";
import { useMealContext } from "../../context/meals/MealContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import { initSpecificBuyinglist } from "./helper/InitSpecificBuyinglist";
import { useGetMeal } from "./helper/useGetMeal";
import MealdetailsView from "./view/MealdetailsView";

const Mealdetails = ({ navigateTo }) => {
  const { meals } = useMealContext();
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();
  const [specificBuyinglist, setSpecificBuyinglist] = useState();
  const { handleIngredient } = useBuyinglist();
  const { getMeal } = useGetMeal();
  const params = useParams();
  const [mealInfo, setMealInfo] = useState(undefined);

  useEffect(() => {
    const getMealLogic = async () => {
      const returnedValue = await getMeal(meals, params.id);
      setMealInfo(returnedValue);
    };

    getMealLogic();
  }, []);

  // for shoppingCart => icon on image
  useEffect(() => {
    if (mealInfo) {
      const sBuyinglist = initSpecificBuyinglist(
        mealInfo.ingredients,
        buyinglist,
        mealInfo.mealinformation
      );

      setSpecificBuyinglist([...sBuyinglist]);
    }
  }, [buyinglist]);

  const handleIngredientClick = ({ ...take }) => {
    const preparation = {
      ...take,
      buyinglist,
      meal: mealInfo,
      specificBuyinglist,
    };
    const { newBuyinglist, newSpecificBuyinglist } =
      handleIngredient(preparation);

    if (newBuyinglist !== undefined && newSpecificBuyinglist !== undefined) {
      dispatchBuyinglist({
        type: "UPDATE_BUYINGLIST",
        payload: newBuyinglist,
      });
      setSpecificBuyinglist([...newSpecificBuyinglist]);
    } else {
      toast.error("💀 Something went wrong, try again");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-bgPrimaryCol">
      {/* <Helmet>
        <title>{mealinformation.title}</title>
        <meta name="description" content="" />
      </Helmet> */}

      <MealdetailsView
        meal={mealInfo}
        onIngredientClick={handleIngredientClick}
        specificBuyinglist={specificBuyinglist}
      />
    </div>
  );
};

export default Mealdetails;
