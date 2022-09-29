import React from "react";
import { v4 as uuidv4 } from "uuid";
import SingleCard from "../utilities/cards/SingleCard";
import Loading from "./Loading";

const FavMealsOne = ({ filteredMeals }) => {
  return (
    <div
      className={`flex gap-2 flex-col md:flex-row md:flex-wrap w-full px-10 md:gap-6 justify-center max-w-[1350px]`}
    >
      {filteredMeals ? (
        <>
          {filteredMeals.map((favMeal) => (
            <SingleCard key={uuidv4()} meal={favMeal} />
          ))}
        </>
      ) : (
        <Loading />
      )}

      {/* puffer */}
      <div className="h-24 600:h-28 w-full"></div>
    </div>
  );
};

export default FavMealsOne;
