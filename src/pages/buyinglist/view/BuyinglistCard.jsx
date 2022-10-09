import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useBuyinglistContext } from "../../../context/buyinglist/buyinglistContext";
import styles from "../../../styles";
import { useAddAndRemove } from "../helper/useAddAndRemove";

const BuyinglistCard = () => {
  const { buyinglist } = useBuyinglistContext();
  const { handleDelete } = useAddAndRemove();

  const navigate = useNavigate();

  const handleClick = (meal, title) => {
    let mealId = meal[title].filter((item) => typeof item === "number");
    navigate(`/mealdetails/${mealId[0]}`, { state: { navigateBack: true } });
  };

  return (
    <>
      {buyinglist.map((meal) => (
        <div
          key={uuidv4()}
          className="flex flex-col py-5 px-8 gap-4 bg-bgPrimaryCol rounded-[20px] buyinglistMealShadow"
        >
          {/* mealname */}
          <div className="flex justify-between items-center py-1 border-b-2 text-lightTextCol z-10">
            <p
              onClick={() => handleClick(meal, Object.keys(meal)[0])}
              className={`${styles.paragraph16} flex flex-grow`}
            >
              {Object.keys(meal)[0]}
            </p>
            <div
              onClick={() => handleDelete({ mealName: Object.keys(meal)[0] })}
              className="w-12 flex items-center justify-center cursor-pointer z-20"
            >
              <FaTimes size="14px" />
            </div>
          </div>
          <div className="flex flex-col pl-6 gap-[5px]">
            {meal[Object.keys(meal)[0]].map((ingredient) => (
              <div
                key={uuidv4()}
                className="flex items-center justify-between text-lightTextCol"
              >
                <div
                  className={`w-full ${styles.paragraph14} flex flex-wrap gap-x-2`}
                >
                  <p className={`${styles.paragraph14} w-8/12`}>
                    {ingredient.name}
                  </p>
                  <p className={`${styles.paragraph14}`}>
                    {ingredient.amount.toFixed(1)}
                    {ingredient.unitShort}
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  value="smt"
                  onClick={() =>
                    handleDelete({
                      mealName: Object.keys(meal)[0],
                      ingredientName: ingredient.name,
                    })
                  }
                  className="w-12 flex items-center justify-center cursor-pointer"
                >
                  <FaTimes size="12px" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default BuyinglistCard;
