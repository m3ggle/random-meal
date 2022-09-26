import React from 'react'
import FavMealsOneCard from '../utilities/cards/FavMealsOneCard';
import { v4 as uuidv4 } from "uuid";
import Loading from './Loading';

const FavMealsOne = ({
  filteredMeals,
  callbackRemoveFavMeal,
  callbackBuyinglist,
}) => {
  return (
    <div
      className={`flex gap-2 flex-col md:flex-row md:flex-wrap w-full px-10 md:gap-6 justify-center max-w-[1350px]`}
    >
      {filteredMeals ? (
        <>
          {filteredMeals.map((favMeal) => (
            <FavMealsOneCard
              key={uuidv4()}
              meal={favMeal}
              callbackRemoveFavMeal={callbackRemoveFavMeal}
              callbackBuylist={callbackBuyinglist}
            />
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

export default FavMealsOne