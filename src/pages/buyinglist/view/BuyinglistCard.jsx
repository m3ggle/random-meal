import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useBuyinglistContext } from "../../../context/buyinglist/buyinglistContext";
import styles from "../../../styles";
import { useAddAndRemove } from "../helper/useAddAndRemove";

const BuyinglistCard = () => {
  const { buyinglist } = useBuyinglistContext();
  const { handleDelete } = useAddAndRemove();

  return (
    <>
      {buyinglist.map((meal) => (
        <div
          key={uuidv4()}
          className="buyinglistMealShadow flex flex-col gap-4 rounded-[20px] bg-bgPrimaryCol py-5 px-8"
        >
          {/* mealname */}
          <div className="z-10 flex items-center justify-between border-b-2 py-1 text-lightTextCol">
            <p className={`${styles.paragraph16} flex flex-grow`}>
              {Object.keys(meal)[0]}
            </p>
            <div
              onClick={() => handleDelete({ mealName: Object.keys(meal)[0] })}
              className="z-20 flex w-12 cursor-pointer items-center justify-center"
            >
              <FaTimes size="14px" />
            </div>
          </div>
          <div className="flex flex-col gap-[5px] pl-6">
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
                  className="flex w-12 cursor-pointer items-center justify-center"
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
