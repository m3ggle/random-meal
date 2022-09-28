import { createContext, useReducer } from "react";
import spoonacularReducer from "./SpoonacularReducer";

const SpoonacularContext = createContext();

export const SpoonacularProvider = ({ children }) => {
  const initialState = {
    user: {},
    buyinglist: [],
    meals: {
      580283: {
        liked: true,
        mealinformation: {
          id: 580283,
          title: "Homemade Bisquick Mix: Breakfast Made Easy (Example)",
          readyInMinutes: 5,
          servings: 7,
          sourceUrl:
            "http://www.foodfanatic.com/2013/05/homemade-bisquick-mix-breakfast-made-easy/",
          image:
            "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
          vegetarian: true,
          vegan: false,
          preparationMinutes: 5,
          cookingMinutes: 0,
          healthScore: 9,
          dishTypes: ["morning meal", "brunch", "Breakfast"],
        },
        ingredients: [
          {
            id: 18371,
            name: "baking powder",
            nameClean: "low sodium baking powder",
            image: "white-powder.jpg",
            measures: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 18372,
            name: "baking soda",
            nameClean: "baking soda",
            image: "white-powder.jpg",
            measures: {
              amount: 1.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 20081,
            name: "flour",
            nameClean: "wheat flour",
            image: "flour.png",
            measures: {
              amount: 1.42,
              unitShort: "l",
              unitLong: "liters",
            },
          },
          {
            id: 2047,
            name: "salt",
            nameClean: "table salt",
            image: "salt.jpg",
            measures: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
          {
            id: 19335,
            name: "sugar",
            nameClean: "sugar",
            image: "sugar-in-bowl.png",
            measures: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 1145,
            name: "unsalted butter",
            nameClean: "unsalted butter",
            image: "butter-sliced.jpg",
            measures: {
              amount: 1.5,
              unitShort: "sticks",
              unitLong: "sticks",
            },
          },
        ],
        nutrients: {
          nutrients: [
            {
              name: "Calories",
              amount: 588.41,
              unit: "kcal",
              percentOfDailyNeeds: 29.42,
            },
            {
              name: "Fat",
              amount: 20.73,
              unit: "g",
              percentOfDailyNeeds: 31.89,
            },
            {
              name: "Sugar",
              amount: 5.44,
              unit: "g",
              percentOfDailyNeeds: 6.04,
            },
            {
              name: "Protein",
              amount: 11.28,
              unit: "g",
              percentOfDailyNeeds: 22.56,
            },
          ],
          caloricBreakdown: {
            percentProtein: 7.66,
            percentFat: 31.68,
            percentCarbs: 60.66,
          },
        },
        instructions: {
          summary:
            "In the largest bowl you have, whisk together everything except the butter.Using a pastry blender, cut the butter into the flour mixture until the butter is in very small pieces and the mixture resembles Bisquick mix in texture (you’re essentially looking for a coarse meal, with no big pieces of butter remaining). This is going to take a few minutes and some elbow grease, but have patience – it will get there.Store in an airtight container in the refrigerator for up to two months.Use cup for cup in place of Bisquick mix in recipes.",
          steps: [
            {
              number: 1,
              step: "In the largest bowl you have, whisk together everything except the butter.Using a pastry blender, cut the butter into the flour mixture until the butter is in very small pieces and the mixture resembles Bisquick mix in texture (you’re essentially looking for a coarse meal, with no big pieces of butter remaining). This is going to take a few minutes and some elbow grease, but have patience – it will get there.Store in an airtight container in the refrigerator for up to two months.Use cup for cup in place of Bisquick mix in recipes.",
              ingredients: [
                {
                  id: 18010,
                  name: "baking mix",
                  localizedName: "baking mix",
                  image: "brown-flour.jpg",
                },
                {
                  id: 1001,
                  name: "butter",
                  localizedName: "butter",
                  image: "butter-sliced.jpg",
                },
                {
                  id: 20081,
                  name: "all purpose flour",
                  localizedName: "all purpose flour",
                  image: "flour.png",
                },
              ],
              equipment: [
                {
                  id: 404726,
                  name: "blender",
                  localizedName: "blender",
                  image: "blender.png",
                },
                {
                  id: 404661,
                  name: "whisk",
                  localizedName: "whisk",
                  image: "whisk.png",
                },
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
          ],
        },
      },
    },
    combos: {},
    favoriteMeals: [],
    favortieCombos: [],
    catalogMeals: [],
    shareCombos: [],
    spoonacularResult: [
      {
        liked: true,
        mealinformation: {
          id: 580283,
          title: "Homemade Bisquick Mix: Breakfast Made Easy (Example)",
          readyInMinutes: 5,
          servings: 7,
          sourceUrl:
            "http://www.foodfanatic.com/2013/05/homemade-bisquick-mix-breakfast-made-easy/",
          image:
            "https://images.unsplash.com/photo-1594834749740-74b3f6764be4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80",
          vegetarian: true,
          vegan: false,
          preparationMinutes: 5,
          cookingMinutes: 0,
          healthScore: 9,
          dishTypes: ["morning meal", "brunch", "Breakfast"],
        },
        ingredients: [
          {
            id: 18371,
            name: "baking powder",
            nameClean: "low sodium baking powder",
            image: "white-powder.jpg",
            measures: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 18372,
            name: "baking soda",
            nameClean: "baking soda",
            image: "white-powder.jpg",
            measures: {
              amount: 1.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 20081,
            name: "flour",
            nameClean: "wheat flour",
            image: "flour.png",
            measures: {
              amount: 1.42,
              unitShort: "l",
              unitLong: "liters",
            },
          },
          {
            id: 2047,
            name: "salt",
            nameClean: "table salt",
            image: "salt.jpg",
            measures: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
          {
            id: 19335,
            name: "sugar",
            nameClean: "sugar",
            image: "sugar-in-bowl.png",
            measures: {
              amount: 3,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 1145,
            name: "unsalted butter",
            nameClean: "unsalted butter",
            image: "butter-sliced.jpg",
            measures: {
              amount: 1.5,
              unitShort: "sticks",
              unitLong: "sticks",
            },
          },
        ],
        nutrients: {
          nutrients: [
            {
              name: "Calories",
              amount: 588.41,
              unit: "kcal",
              percentOfDailyNeeds: 29.42,
            },
            {
              name: "Fat",
              amount: 20.73,
              unit: "g",
              percentOfDailyNeeds: 31.89,
            },
            {
              name: "Sugar",
              amount: 5.44,
              unit: "g",
              percentOfDailyNeeds: 6.04,
            },
            {
              name: "Protein",
              amount: 11.28,
              unit: "g",
              percentOfDailyNeeds: 22.56,
            },
          ],
          caloricBreakdown: {
            percentProtein: 7.66,
            percentFat: 31.68,
            percentCarbs: 60.66,
          },
        },
        instructions: {
          summary:
            "In the largest bowl you have, whisk together everything except the butter.Using a pastry blender, cut the butter into the flour mixture until the butter is in very small pieces and the mixture resembles Bisquick mix in texture (you’re essentially looking for a coarse meal, with no big pieces of butter remaining). This is going to take a few minutes and some elbow grease, but have patience – it will get there.Store in an airtight container in the refrigerator for up to two months.Use cup for cup in place of Bisquick mix in recipes.",
          steps: [
            {
              number: 1,
              step: "In the largest bowl you have, whisk together everything except the butter.Using a pastry blender, cut the butter into the flour mixture until the butter is in very small pieces and the mixture resembles Bisquick mix in texture (you’re essentially looking for a coarse meal, with no big pieces of butter remaining). This is going to take a few minutes and some elbow grease, but have patience – it will get there.Store in an airtight container in the refrigerator for up to two months.Use cup for cup in place of Bisquick mix in recipes.",
              ingredients: [
                {
                  id: 18010,
                  name: "baking mix",
                  localizedName: "baking mix",
                  image: "brown-flour.jpg",
                },
                {
                  id: 1001,
                  name: "butter",
                  localizedName: "butter",
                  image: "butter-sliced.jpg",
                },
                {
                  id: 20081,
                  name: "all purpose flour",
                  localizedName: "all purpose flour",
                  image: "flour.png",
                },
              ],
              equipment: [
                {
                  id: 404726,
                  name: "blender",
                  localizedName: "blender",
                  image: "blender.png",
                },
                {
                  id: 404661,
                  name: "whisk",
                  localizedName: "whisk",
                  image: "whisk.png",
                },
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
          ],
        },
      },
      {
        liked: false,
        mealinformation: {
          id: 77188,
          title: "Rustic Rigatoni (Example)",
          readyInMinutes: 18,
          servings: 4,
          sourceUrl:
            "http://www.myrecipes.com/recipe/rustic-rigatoni-10000001185345/",
          image:
            "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
          vegetarian: true,
          vegan: false,
          preparationMinutes: 10,
          cookingMinutes: 8,
          healthScore: 25,
          dishTypes: ["Lunch", "main course", "main dish", "Dinner"],
        },
        ingredients: [
          {
            id: 2069,
            name: "balsamic vinegar",
            nameClean: "balsamic vinegar",
            image: "balsamic-vinegar.jpg",
            measures: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 2044,
            name: "basil leaves",
            nameClean: "fresh basil",
            image: "fresh-basil.jpg",
            measures: {
              amount: 6,
              unitShort: "large",
              unitLong: "larges",
            },
          },
          {
            id: 1032009,
            name: "crushed red pepper",
            nameClean: "red pepper flakes",
            image: "red-pepper-flakes.jpg",
            measures: {
              amount: 0.5,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 1019,
            name: "feta cheese",
            nameClean: "feta cheese",
            image: "feta.png",
            measures: {
              amount: 236.588,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
          {
            id: 4053,
            name: "olive oil",
            nameClean: "olive oil",
            image: "olive-oil.jpg",
            measures: {
              amount: 2,
              unitShort: "Tbsps",
              unitLong: "Tbsps",
            },
          },
          {
            id: 12147,
            name: "pine nuts",
            nameClean: "pine nuts",
            image: "pine-nuts.png",
            measures: {
              amount: 59.147,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
          {
            id: 10011282,
            name: "red onion",
            nameClean: "red onion",
            image: "red-onion.png",
            measures: {
              amount: 0.5,
              unitShort: "medium",
              unitLong: "mediums",
            },
          },
          {
            id: 11220420,
            name: "rigatoni",
            nameClean: "rigatoni",
            image: "rigatoni.jpg",
            measures: {
              amount: 340.194,
              unitShort: "g",
              unitLong: "grams",
            },
          },
          {
            id: 2047,
            name: "salt",
            nameClean: "table salt",
            image: "salt.jpg",
            measures: {
              amount: 0.75,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 11955,
            name: "sun-dried tomatoes",
            nameClean: "sun dried tomatoes",
            image: "sundried-tomatoes.jpg",
            measures: {
              amount: 10,
              unitShort: "",
              unitLong: "",
            },
          },
        ],
        nutrients: {
          nutrients: [
            {
              name: "Calories",
              amount: 559.85,
              unit: "kcal",
              percentOfDailyNeeds: 27.99,
            },
            {
              name: "Fat",
              amount: 22.32,
              unit: "g",
              percentOfDailyNeeds: 34.34,
            },
            {
              name: "Sugar",
              amount: 6.25,
              unit: "g",
              percentOfDailyNeeds: 6.95,
            },
            {
              name: "Protein",
              amount: 18.52,
              unit: "g",
              percentOfDailyNeeds: 37.04,
            },
          ],
          caloricBreakdown: {
            percentProtein: 13.19,
            percentFat: 35.77,
            percentCarbs: 51.04,
          },
        },
        instructions: {
          summary:
            "Cook the pasta according to package directions.                                                                                                 While pasta cooks, heat 1 tablespoon olive oil in a large skillet. Add onion, and saut over medium-high heat until tender and fragrant, about 3 minutes. Add salt, balsamic vinegar, sun-dried tomatoes, crushed red pepper, and pine nuts; cook, partially covered, over medium-low heat for 4 minutes, stirring occasionally.                                                                                                 When al dente, drain the pasta and add it to the skillet, stirring to combine for about 1 minute. Transfer the pasta to a large serving bowl, and toss in the feta cheese, basil, and remaining olive oil. Serve immediately.",
          steps: [
            {
              number: 1,
              step: "Cook the pasta according to package directions.",
              ingredients: [
                {
                  id: 20420,
                  name: "pasta",
                  localizedName: "pasta",
                  image: "fusilli.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "While pasta cooks, heat 1 tablespoon olive oil in a large skillet.",
              ingredients: [
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
                {
                  id: 20420,
                  name: "pasta",
                  localizedName: "pasta",
                  image: "fusilli.jpg",
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png",
                },
              ],
            },
            {
              number: 3,
              step: "Add onion, and saut over medium-high heat until tender and fragrant, about 3 minutes.",
              ingredients: [
                {
                  id: 11282,
                  name: "onion",
                  localizedName: "onion",
                  image: "brown-onion.png",
                },
              ],
              equipment: [],
              length: {
                number: 3,
                unit: "minutes",
              },
            },
            {
              number: 4,
              step: "Add salt, balsamic vinegar, sun-dried tomatoes, crushed red pepper, and pine nuts; cook, partially covered, over medium-low heat for 4 minutes, stirring occasionally.",
              ingredients: [
                {
                  id: 1032009,
                  name: "red pepper flakes",
                  localizedName: "red pepper flakes",
                  image: "red-pepper-flakes.jpg",
                },
                {
                  id: 11955,
                  name: "sun dried tomatoes",
                  localizedName: "sun dried tomatoes",
                  image: "sundried-tomatoes.jpg",
                },
                {
                  id: 2069,
                  name: "balsamic vinegar",
                  localizedName: "balsamic vinegar",
                  image: "balsamic-vinegar.jpg",
                },
                {
                  id: 12147,
                  name: "pine nuts",
                  localizedName: "pine nuts",
                  image: "pine-nuts.png",
                },
                {
                  id: 2047,
                  name: "salt",
                  localizedName: "salt",
                  image: "salt.jpg",
                },
              ],
              equipment: [],
              length: {
                number: 4,
                unit: "minutes",
              },
            },
            {
              number: 5,
              step: "When al dente, drain the pasta and add it to the skillet, stirring to combine for about 1 minute.",
              ingredients: [
                {
                  id: 20420,
                  name: "pasta",
                  localizedName: "pasta",
                  image: "fusilli.jpg",
                },
              ],
              equipment: [
                {
                  id: 404645,
                  name: "frying pan",
                  localizedName: "frying pan",
                  image: "pan.png",
                },
              ],
              length: {
                number: 1,
                unit: "minutes",
              },
            },
            {
              number: 6,
              step: "Transfer the pasta to a large serving bowl, and toss in the feta cheese, basil, and remaining olive oil.",
              ingredients: [
                {
                  id: 1019,
                  name: "feta cheese",
                  localizedName: "feta cheese",
                  image: "feta.png",
                },
                {
                  id: 4053,
                  name: "olive oil",
                  localizedName: "olive oil",
                  image: "olive-oil.jpg",
                },
                {
                  id: 2044,
                  name: "basil",
                  localizedName: "basil",
                  image: "basil.jpg",
                },
                {
                  id: 20420,
                  name: "pasta",
                  localizedName: "pasta",
                  image: "fusilli.jpg",
                },
              ],
              equipment: [
                {
                  id: 404783,
                  name: "bowl",
                  localizedName: "bowl",
                  image: "bowl.jpg",
                },
              ],
            },
            {
              number: 7,
              step: "Serve immediately.",
              ingredients: [],
              equipment: [],
            },
          ],
        },
      },
      {
        liked: false,
        mealinformation: {
          id: 596149,
          title: "Mung Bean Fettuchini (Example)",
          readyInMinutes: 20,
          servings: 4,
          sourceUrl: "http://www.wishfulchef.com/mung-bean-pasta/",
          image:
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          vegetarian: true,
          vegan: false,
          preparationMinutes: -1,
          cookingMinutes: -1,
          healthScore: 7,
          dishTypes: ["Lunch", "main course", "main dish", "Dinner"],
        },
        ingredients: [
          {
            id: 1001,
            name: "butter",
            nameClean: "butter",
            image: "butter-sliced.jpg",
            measures: {
              amount: 1,
              unitShort: "Tbsp",
              unitLong: "Tbsp",
            },
          },
          {
            id: 1123,
            name: "egg",
            nameClean: "egg",
            image: "egg.png",
            measures: {
              amount: 1,
              unitShort: "",
              unitLong: "",
            },
          },
          {
            id: 1053,
            name: "heavy cream",
            nameClean: "cream",
            image: "fluid-cream.jpg",
            measures: {
              amount: 59.147,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
          {
            id: 11420420,
            name: "long pasta",
            nameClean: "spaghetti",
            image: "spaghetti.jpg",
            measures: {
              amount: 1,
              unitShort: "pkg",
              unitLong: "package",
            },
          },
          {
            id: 1038,
            name: "pecorino romano cheese",
            nameClean: "pecorino romano",
            image: "parmesan.jpg",
            measures: {
              amount: 118.294,
              unitShort: "ml",
              unitLong: "milliliters",
            },
          },
          {
            id: 2047,
            name: "salt",
            nameClean: "table salt",
            image: "salt.jpg",
            measures: {
              amount: 2,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 1024053,
            name: "truffle oil",
            nameClean: "truffle oil",
            image: "truffle-oil.jpg",
            measures: {
              amount: 3,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
          {
            id: 2032,
            name: "white pepper",
            nameClean: "white pepper",
            image: "white-pepper.png",
            measures: {
              amount: 3,
              unitShort: "tsps",
              unitLong: "teaspoons",
            },
          },
        ],
        nutrients: {
          nutrients: [
            {
              name: "Calories",
              amount: 588.11,
              unit: "kcal",
              percentOfDailyNeeds: 29.41,
            },
            {
              name: "Fat",
              amount: 17.35,
              unit: "g",
              percentOfDailyNeeds: 26.7,
            },
            {
              name: "Sugar",
              amount: 3.57,
              unit: "g",
              percentOfDailyNeeds: 3.97,
            },
            {
              name: "Protein",
              amount: 20.64,
              unit: "g",
              percentOfDailyNeeds: 41.28,
            },
          ],
          caloricBreakdown: {
            percentProtein: 14.17,
            percentFat: 26.8,
            percentCarbs: 59.03,
          },
        },
        instructions: {
          summary:
            "Cook pasta according to package instructions. Drain and reserve 1/4 cup of the cooking water.",
          steps: [
            {
              number: 1,
              step: "Cook pasta according to package instructions.",
              ingredients: [
                {
                  id: 20420,
                  name: "pasta",
                  localizedName: "pasta",
                  image: "fusilli.jpg",
                },
              ],
              equipment: [],
            },
            {
              number: 2,
              step: "Drain and reserve 1/4 cup of the cooking water.",
              ingredients: [
                {
                  id: 14412,
                  name: "water",
                  localizedName: "water",
                  image: "water.png",
                },
              ],
              equipment: [],
            },
          ],
        },
      },
    ],
    loading: false,
    errorMsg: "",
    allMealIds: [],
  };

  const [state, dispatch] = useReducer(spoonacularReducer, initialState);

  return (
    <SpoonacularContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SpoonacularContext.Provider>
  );
};

export default SpoonacularContext;
