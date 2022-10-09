export const initSpecificBuyinglist = (
  ingredients,
  buyinglist,
  mealinformation
) => {
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

  return list;
};
