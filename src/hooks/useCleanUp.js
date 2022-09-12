// error catching is missing
export default function useCleanUp (data) {
  // mealinformation
  const getMealinformation = (originalRecipe) => {
    return {
      id: originalRecipe.id,
      title: originalRecipe.title,
      readyInMinutes: originalRecipe.readyInMinutes,
      servings: originalRecipe.servings,
      sourceUrl: originalRecipe.sourceUrl,
      image: originalRecipe.image,
      vegetarian: originalRecipe.vegetarian,
      vegan: originalRecipe.vegan,
      preparationMinutes: originalRecipe.preparationMinutes,
      cookingMinutes: originalRecipe.cookingMinutes,
      healthScore: originalRecipe.healthScore,
      dishTypes: originalRecipe.dishTypes,
    };
  };

  // ingredients
  const getIngredients = (originalRecipe) => {
    return originalRecipe.extendedIngredients.map((ing) => {
      let getIngredient = {};
      getIngredient.id = ing.id;
      getIngredient.name = ing.name;
      getIngredient.nameClean = ing.nameClean;
      getIngredient.image = ing.image;
      getIngredient.measures = ing.measures.metric;

      return getIngredient;
    });
  };

  // nutrients
  const getNutrients = (originalRecipe) => {
    return {
      nutrients: originalRecipe.nutrition.nutrients.filter((nut) => {
        return (
          nut.name === "Calories" ||
          nut.name === "Fat" ||
          nut.name === "Sugar" ||
          nut.name === "Protein"
        );
      }),
      caloricBreakdown: originalRecipe.nutrition.caloricBreakdown,
    };
  };

  // instructions
  const getInstructions = (originalRecipe) => {
    return {
      summary: originalRecipe.instructions,
      steps: originalRecipe.analyzedInstructions[0].steps,
    };
  };

  // Condesor, distribuator, u name it
  const recipeCondensor = (singleRecipe) => {
    return {
      mealinformation: getMealinformation(singleRecipe),
      ingredients: getIngredients(singleRecipe),
      nutrients: getNutrients(singleRecipe),
      instructions: getInstructions(singleRecipe),
    };
  };

  if (data !== undefined) {
    return data.map((singleRecipe) => recipeCondensor(singleRecipe));
  }
};


