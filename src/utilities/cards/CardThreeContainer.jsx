import React, { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../components/Loading";
import SpoonacularContext from "../../context/SpoonacularContext";
import { useBuyinglist } from "../../hooks/useBuyinglist";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles";
import CardThree from "./CardThree";

const CardThreeContainer = ({ combo }) => {
  const { meals, buyinglist, dispatch } = useContext(SpoonacularContext);
  const { width } = useWindowDimensions();
  // Todo: handle icon click and handle title click

  const { handleBuyinglistCombo } = useBuyinglist();

  const handleBuy = () => {
    const newBuyinglist = handleBuyinglistCombo({
      buyinglist,
      mealsInCombo: [
        meals[combo.breakfast],
        meals[combo.lunch],
        meals[combo.dinner],
      ],
    });
    dispatch({ type: "UPDATE_BUYINGLIST", payload: newBuyinglist });
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
        <div className="flex flex-col px-6 pt-4 pb-6 h-fit rounded-[24px] combinationBg 500:w-full 700:w-fit max-w-[622px]">
          {/* header */}
          <div className="flex flex-row 500:items-center justify-between gap-x-5">
            {/* left part */}
            <div className="flex items-center gap-x-1 500:gap-x-4">
              <p
                className={
                  width > 700
                    ? `${styles.heading24} text-lightTextCol`
                    : `${styles.heading16} text-lightTextCol whitespace-nowrap truncate`
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
                    ? `text-[16px] font-semibold cursor-pointer`
                    : `text-[14px] font-semibold cursor-pointer`
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
          <div className="flex flex-wrap w-full gap-x-1 gap-y-[2px] mt-1 mb-2">
            {combo.nutrients.map((nut) => (
              <div
                key={uuidv4()}
                className={`px-4 py-1 w-fit tagInfo rounded-full ${styles.tag10}`}
              >
                {nut.name}: {nut.amount.toFixed(0)}
                {nut.unit}
              </div>
            ))}
          </div>
          {/* cards */}
          <div className="flex flex-col 700:flex-row gap-2">
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
