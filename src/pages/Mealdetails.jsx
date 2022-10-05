import { Helmet } from "react-helmet";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaShare, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import SpoonacularContext from "../context/SpoonacularContext";
import { db } from "../firebase.config";
import styles from "../styles";
import { useBuyinglistContext } from "../context/buyinglist/buyinglistContext";

const Mealdetails = ({ data, navigateTo }) => {
  // Todo: anhand der params id herausnehmen und in firestore meal holen (wenn in data nichts drin ist)
  const navigate = useNavigate();
  const { mealinformation, ingredients, nutrients, instructions } = data;
  const { dispatch } = useContext(SpoonacularContext);
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();
  const [specificBuyinglist, setSpecificBuyinglist] = useState();

  useEffect(() => {
    // Todo: check in ingredient is already in buyinglist (firestore) (all false is incorrect)

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
      <div className="relative w-full h-screen overflow-auto flex justify-center">
        {/* beginning of the actual modal */}
        <div
          className={`absolute top-[50px] 900:top-[120px] w-full 900:w-10/12 rounded-t-[30px] modalShadow max-w-[1200px]`}
        >
          {/* top pic */}
          <div
            className="relative w-full h-[385px] rounded-t-[30px] bg-center bg-cover"
            style={{ backgroundImage: `url(${mealinformation.image})` }}
          >
            <div className={`w-full h-full imgOverlayMealdetails`}></div>
            {/* close icon */}
            <div
              className="absolute top-12 right-12 w-fit h-fit"
              onClick={() =>
                navigateTo === undefined ? navigate(-1) : navigate("/")
              }
            >
              <FaTimes
                size="30px"
                className="text-lightTextCol cursor-pointer"
              />
            </div>
          </div>

          {/* bottom information */}
          <div className="w-full modalGradient flex flex-col px-[30px] 900:px-10 pb-20 gap-y-8 900:gap-y-4">
            {/* titel and introduction */}
            <div className="w-full flex flex-col gap-y-2">
              <div className="flex flex-row items-center gap-x-2"></div>
              <p
                className={`${styles.heading32} text-lightTextCol flex flex-row gap-x-2 items-center w-fit cursor-pointer`}
              >
                {mealinformation.title}
                <a
                  href={mealinformation.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaShare size="25px" />
                </a>
              </p>
              {/* servings */}
              <div>
                <p className={`${styles.paragraph20} text-lightTextCol`}>
                  Servings: {mealinformation.servings}
                </p>
                <p className={`${styles.paragraph20} text-lightTextCol`}>
                  Healthscore: {mealinformation.healthScore}
                </p>
              </div>
              {/* tags */}
              <div className="flex flex-wrap gap-x-2">
                {mealinformation.dishTypes.map((type) => {
                  if (
                    type === "Breakfast" ||
                    type === "Lunch" ||
                    type === "Dinner" ||
                    type === "Vegeterian" ||
                    type === "Vegan"
                  ) {
                    return (
                      <div
                        key={uuidv4()}
                        className={`px-4 py-1 w-fit ${
                          type === "Dinner"
                            ? "tagDinner"
                            : type === "Lunch"
                            ? "tagLunch"
                            : "tagBreakfast"
                        } rounded-full ${styles.tag12}`}
                      >
                        {type}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="flex flex-wrap gap-2">
                {nutrients.nutrients.map((nut) => (
                  <div
                    key={uuidv4()}
                    className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag12}`}
                  >
                    {nut.name}: {nut.amount.toFixed(0)}
                    {nut.unit}
                  </div>
                ))}
              </div>
            </div>
            {/* instructions + ingredients */}
            <div className="w-full flex flex-col-reverse gap-y-8 900:gap-x-10 900:py-4">
              {/* instructions */}
              <div className="w-full flex flex-col gap-y-2">
                <p className={`${styles.heading24} text-lightTextCol`}>
                  How it's done
                </p>
                {/* Steps */}
                <div className="flex lg:grid grid-cols-2 flex-col gap-3">
                  {instructions.steps.map((instruction, index) => (
                    <div
                      key={uuidv4()}
                      className="w-full max-w-[540px] flex flex-col buyinglistMealShadow p-[24px] gap-y-4 rounded-xl"
                    >
                      {/* txt */}
                      <p className={`${styles.paragraph16} text-lightTextCol`}>
                        <span className={`text-[24px]`}>
                          {instruction.number}.
                        </span>{" "}
                        {instruction.step}
                      </p>
                      {/* Equipment and Ingredients */}
                      <div className="w-full flex flex-wrap gap-4">
                        {/* Equipment */}
                        {instruction.equipment.length > 0 && (
                          <div className="flex flex-col gap-y-2 max-w-[168px]">
                            <p
                              className={`${styles.paragraph14} text-lightTextCol`}
                            >
                              Equipment
                            </p>
                            <div className="w-fit flex gap-x-2">
                              {instruction.equipment.map((equip, index) => {
                                const equipImage = equip.image;
                                return (
                                  <div
                                    key={uuidv4()}
                                    className="relative w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
                                    style={{
                                      backgroundImage: `url(https://spoonacular.com/cdn/equipment_500x500/${equipImage})`,
                                    }}
                                  ></div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                        {/* ingredients */}
                        {instruction.ingredients.length > 0 && (
                          <div className="flex flex-col gap-y-2">
                            <p
                              className={`${styles.paragraph14} text-lightTextCol`}
                            >
                              Ingredients
                            </p>
                            <div className="w-fit flex flex-wrap gap-2">
                              {instruction.ingredients.map(
                                (ingredient, index) => {
                                  const ingredientImage = ingredient.image;
                                  return (
                                    <div
                                      key={uuidv4()}
                                      className="w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
                                      style={{
                                        backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingredientImage})`,
                                      }}
                                    >
                                      <div
                                        className={`w-full h-full rounded-full bg-[#28293380] opacity-0 hover:opacity-100 cursor-pointer ${styles.flexCenter}`}
                                      >
                                        <FaShoppingCart
                                          size="30%"
                                          className="text-lightTextCol"
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ingredients */}
              <div className="w-full flex flex-col gap-y-2">
                <p className={`${styles.heading24} text-lightTextCol`}>
                  Ingredients
                </p>
                {/* ingredients pics */}
                <div className="max-w-[540px] w-full flex flex-wrap gap-2">
                  {specificBuyinglist?.map((ing, index) => {
                    const ingImage = ing.image;
                    return (
                      <div
                        key={uuidv4()}
                        id={ing.id}
                        onClick={() =>
                          handleIngredientClick({
                            ingId: ing.id,
                            ingName: ing.name,
                            ingAmount: ing.measures.amount,
                            ingUnit: ing.measures.unitShort,
                            ing,
                            ingIndex: index,
                          })
                        }
                        className="flex flex-col max-w-20 items-center gap-1"
                      >
                        <div
                          className="w-20 h-20 rounded-full bg-center bg-cover bg-gray-400 overflow-hidden"
                          style={{
                            backgroundImage: `url(https://spoonacular.com/cdn/ingredients_500x500/${ingImage})`,
                          }}
                        >
                          <div
                            className={`w-full h-full rounded-full bg-[#28293380] opacity-0 hover:opacity-100 cursor-pointer ${styles.flexCenter}`}
                          >
                            {ing.inShoppingCart ? (
                              <FaCheck
                                size="30%"
                                className="text-lightTextCol"
                              />
                            ) : (
                              <FaShoppingCart
                                size="30%"
                                className="text-lightTextCol"
                              />
                            )}
                          </div>
                          <p>{ing.id * index}</p>
                        </div>
                        <div className="flex flex-col gap-y-0">
                          <p
                            className={`${styles.paragraph14} text-lightTextCol w-20 text-center`}
                          >
                            {ing.measures.amount.toFixed(1) +
                              " " +
                              ing.measures.unitShort}
                          </p>
                          <p
                            className={`${styles.paragraph14} text-lightTextCol w-20 text-center leading-4`}
                          >
                            {ing.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mealdetails;
