import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useBuyinglistContext } from "../../context/buyinglist/buyinglistContext";
import { db } from "../../firebase.config";
import MealdetailsView from "./view/MealdetailsView";

const Mealdetails = ({ data, navigateTo }) => {
  const navigate = useNavigate();
  const { mealinformation, ingredients, nutrients, instructions } = data;
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();
  const [specificBuyinglist, setSpecificBuyinglist] = useState();

  useEffect(() => {
    let list = ingredients;
    // depending on the buyinglist in the context only those ingredients which are not in the buyinglist get a "inShoppingCart = false"
    const mealExist = buyinglist.filter(
      (mealObj) => mealObj[mealinformation.title]
    );
    if (mealExist.length) {
      mealExist[0][mealinformation.title].map((ingredientBuyinglist) => {
        list.map((ingredientMeal) => {
          if (ingredientMeal.name === ingredientBuyinglist.name) {
            ingredientMeal.inShoppingCart = true;
          }
        });
      });
    }

    setSpecificBuyinglist([...list]);
  }, [buyinglist]);

  const uploadUpdate = async (buyinglist) => {
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

  const handleIngredientClick = ({ ...take }) => {
    const { ing, ingIndex, ingId, ingName, ingAmount, ingUnit } = take;

    if (buyinglist.length > 0 && buyinglist.length < 6) {
      let created = false;
      buyinglist.some((mealObj, index) => {
        if (mealObj[mealinformation.title]) {
          // meal exists in buyinglist
          const ingredientExist = mealObj[mealinformation.title].filter(
            (ing) => ing.name === ingName
          );
          if (ingredientExist.length === 0) {
            console.log("got in here");
            buyinglist[index][mealinformation.title].push({
              name: ingName,
              amount: ingAmount,
              unitShort: ingUnit,
            });
            toast.success("🥦 New Ingredient added to buyinglist");
            dispatchBuyinglist({
              type: "UPDATE_BUYINGLIST",
              payload: buyinglist,
            });
            uploadUpdate(buyinglist);
            created = true;
          } else {
            toast.info("🍆 Ingredient already exists");
            created = true;
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
        dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: buyinglist });
        uploadUpdate(buyinglist);
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
      dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: buyinglist });
      uploadUpdate(buyinglist);
    }

    // update specificBuyinglist
    let list = specificBuyinglist;
    list[ingIndex].inShoppingCart = true;
    setSpecificBuyinglist([...list]);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[100] bg-bgPrimaryCol">
      {/* <Helmet>
        <title>{mealinformation.title}</title>
        <meta name="description" content="" />
      </Helmet> */}

      <MealdetailsView
        meal={data}
        onIngredientClick={handleIngredientClick}
        specificBuyinglist={specificBuyinglist}
      />
    </div>
  );
};

export default Mealdetails;
