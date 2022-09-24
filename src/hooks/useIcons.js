export const useIcons = () => {
  const handleLike = (id, spoonacularResult) => {
    spoonacularResult.map((meals) => {
      if (meals.mealinformation.id === id) {
        meals.liked = true;
      }
    });
  };

  const handleDislike = (id, spoonacularResult) => {
    spoonacularResult.map((meals) => {
      if (meals.mealinformation.id === id) {
        meals.liked = false;
      }
    });
  };

  return { handleLike, handleDislike };
};
