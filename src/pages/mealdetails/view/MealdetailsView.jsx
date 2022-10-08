import React from "react";
import MealdetailsHeader from "./MealdetailsHeader";
import MealdetailsIngredients from "./MealdetailsIngredients";
import MealdetailsInstructions from "./MealdetailsInstructions";
import MealdetailsTop from "./MealdetailsTop";

function MealdetailsView({ meal, specificBuyinglist, onIngredientClick }) {
  const { mealinformation, instructions } = meal;

  return (
    <div className="relative w-full h-screen overflow-auto flex justify-center">
      {/* beginning of the actual modal */}
      <div
        className={`absolute top-[50px] 900:top-[120px] w-full 900:w-10/12 rounded-t-[30px] modalShadow max-w-[1200px]`}
      >
        {/* top pic */}
        <MealdetailsTop image={mealinformation.image} />

        {/* bottom information */}
        <div className="w-full modalGradient flex flex-col px-[30px] 900:px-10 pb-20 gap-y-8 900:gap-y-4">
          <MealdetailsHeader meal={meal} />

          {/* instructions + ingredients */}
          <div className="w-full flex flex-col-reverse gap-y-8 900:gap-x-10 900:py-4">
            {/* instructions */}
            <MealdetailsInstructions instructions={instructions} />

            {/* ingredients */}
            <MealdetailsIngredients
              specificBuyinglist={specificBuyinglist}
              onIngredientClick={onIngredientClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealdetailsView;
