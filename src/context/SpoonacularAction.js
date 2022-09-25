// const github = axios.create({
//   baseURL: Github_URL,
//   headers: {
//     Authorization: `token ${Github_TOKEN}`,
//   },
// });

// get search results
export const getRandomDayMeal = async () => {
  //   const params = new URLSearchParams({ q: text });
  //   const response = await github.get(`/search/users?${params}`);
  //   return response.data.items;

  try {
    const threeMealsRaw = await fetch(
      "https://api.spoonacular.com/mealplanner/generate?apiKey=66446e7f45ed4257af2078582509dafa&timeFrame=day"
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });

    const threeMealsIds = threeMealsRaw.meals.map((meal) => {
      return meal.id;
    });

    const result = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${threeMealsIds}&apiKey=66446e7f45ed4257af2078582509dafa&includeNutrition=true`
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      });
    return result;
  } catch (error) {
    console.log(error);
  }
};
