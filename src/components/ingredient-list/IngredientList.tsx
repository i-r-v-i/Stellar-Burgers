import Ingredient from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import { useMemo, FC } from "react";
import { useSelector } from "react-redux";
import { getStoreIngredients } from "../utils/constants";

type IngredientListProps = {
  ingType: string;
  title: string;
};

const IngredientList: FC<IngredientListProps> = ({ ingType, title }) => {
  const { ingredients } = useSelector(getStoreIngredients);
  const menu = useMemo(
    () => ingredients.filter((item) => item.type === ingType),
    [ingType, ingredients]
  );

  return (
    <>
      <p id={ingType} className="text text_type_main-medium mt-10">
        {title}
      </p>
      <ul className={`${styles.ingredientList} pt-6 pl-4 pr-2 `}>
        {menu.map((item) => (
          <Ingredient
            data={item}
            name={item.name}
            price={item.price}
            image={item.image}
            key={item._id}
            type={item.type}
          />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
