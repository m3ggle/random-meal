// get all combos in an array
// get all mealIds out of the combos
// get the meals with mealIds from the mealContext
// get results back
// put the meals in the right place of the combos
// give combos back

// get all mealIds out of the combos
// get the meals with mealIds from the mealContext


// all combo meals in one array
allComboMeals.map((comboMeals) => {
  comboMeals.map((meal) => {
    mealsForContext.push(meal);
  });
});

// replace the ids of breakfast, lunch, dinner with the mealinformation of the respective meal
combos.map((combo, index) => {
  combo.breakfast = allComboMeals[index].filter(
    (meal) => meal.mealinformation.id === combo.breakfast
  );
  combo.lunch = allComboMeals[index].filter(
    (meal) => meal.mealinformation.id === combo.lunch
  );
  combo.dinner = allComboMeals[index].filter(
    (meal) => meal.mealinformation.id === combo.dinner
  );
});

// currently the breakfast, ..., are wrapped inside a unnecessary array
combos.map((combo) => {
  combo.breakfast = { ...combo.breakfast[0] };
  combo.lunch = { ...combo.lunch[0] };
  combo.dinner = { ...combo.dinner[0] };
});
