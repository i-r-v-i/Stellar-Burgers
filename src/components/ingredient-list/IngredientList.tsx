import Ingredient from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import { useMemo, FC } from "react";
import { getStoreIngredients } from "../utils/constants";
import { useAppSelector } from "../../services/types/hooks";
import { TIngredient } from "../../services/types/ingredients";

type TIngredientListProps = {
  ingType: string;
  title: string;
};

const IngredientList: FC<TIngredientListProps> = ({ ingType, title }) => {
  const { ingredients } = useAppSelector(getStoreIngredients);
  const menu = useMemo(
    () => ingredients.filter((item: TIngredient) => item.type === ingType),
    [ingType, ingredients]
  );

  return (
    <>
      <p id={ingType} className="text text_type_main-medium mt-10">
        {title}
      </p>
      <ul className={`${styles.ingredientList} pt-6 pl-4 pr-2 `}>
        {menu.map((item: TIngredient) => (
          <Ingredient
            ingredientData={item}
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
