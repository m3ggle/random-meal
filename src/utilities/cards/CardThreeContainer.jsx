import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../components/Loading";
import { useBuyinglistContext } from "../../context/buyinglist/buyinglistContext";
import { useMealContext } from "../../context/meals/MealContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";
import CardThree from "./CardThree";

const CardThreeContainer = ({ combo }) => {
  //* context
  const { buyinglist, dispatchBuyinglist } = useBuyinglistContext();
  const { meals } = useMealContext();

  //* states
  //* import fct/hooks
  const { width } = useWindowDimensions();
  const { handleBuyinglistCombo } = useBuyinglist();

  //* destructuring
  //* variables
  //* on you go
  const handleBuy = () => {
    const newBuyinglist = handleBuyinglistCombo({
      buyinglist,
      mealsInCombo: [
        meals[combo.breakfast],
        meals[combo.lunch],
        meals[combo.dinner],
      ],
    });
    dispatchBuyinglist({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
  };

  const handleToastMsg = () => {
    toast.info("😊 This Feature is coming in soon");
  };

  return (
    <>
      {combo &&
      meals[combo.breakfast] &&
      meals[combo.lunch] &&
      meals[combo.dinner] ? (
        <div className="combinationBg flex h-fit max-w-[622px] flex-col rounded-[24px] px-6 pt-4 pb-6 500:w-full 700:w-fit">
          {/* header */}
          <div className="flex flex-row justify-between gap-x-5 500:items-center">
            {/* left part */}
            <div className="flex items-center gap-x-1 500:gap-x-4">
              <p
                className={
                  width > 700
                    ? `${styles.heading24} text-lightTextCol`
                    : `${styles.heading16} truncate whitespace-nowrap text-lightTextCol`
                }
              >
                {combo.title}
              </p>
            </div>
            {/* right part */}
            <div className="flex items-center gap-2 text-lightTextCol">
              <p
                className={
                  width > 700
                    ? `cursor-pointer text-[16px] font-semibold`
                    : `cursor-pointer text-[14px] font-semibold`
                }
              >
                {combo.likeCount}
              </p>
              <FaHeart
                onClick={handleToastMsg}
                size={width > 700 ? "22px" : "16px"}
                className={`cursor-pointer ${
                  combo.liked ? "text-failure" : "text-iconTransCol"
                }`}
              />
              <FaShoppingCart
                onClick={handleBuy}
                size={width > 700 ? "22px" : "16px"}
                className="cursor-pointer"
              />
            </div>
          </div>
          {/* info */}
          <div className="mt-1 mb-2 flex w-full flex-wrap gap-x-1 gap-y-[2px]">
            {combo.nutrients.map((nut) => (
              <div
                key={uuidv4()}
                className={`tagInfo w-fit rounded-full px-4 py-1 ${styles.tag10}`}
              >
                {nut.name}: {nut.amount.toFixed(0)}
                {nut.unit}
              </div>
            ))}
          </div>
          {/* cards */}
          <div className="flex flex-col gap-2 700:flex-row">
            <CardThree meal={meals[combo.breakfast]} />
            <CardThree meal={meals[combo.lunch]} />
            <CardThree meal={meals[combo.dinner]} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CardThreeContainer;
