import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Ingredient.module.css";
import { useDrag } from "react-dnd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { getStoreBurgerConstructor } from "../utils/constants";
import { useAppSelector } from "../../services/types/hooks";
import { FC } from "react";
import { TIngredient } from "../../services/types/ingredients";

interface IIngredientProps {
  ingredientData: TIngredient;
  name: string;
  price: number;
  image: string;
  type: string;
}

const Ingredient: FC<IIngredientProps> = ({
  ingredientData,
  name,
  price,
  image,
  type,
}) => {
  const location = useLocation();
  const { selectedIngredients, selectedBun } = useAppSelector(getStoreBurgerConstructor);

  const count =
    ingredientData.type !== "bun"
      ? selectedIngredients.reduce(
          (sum: number, item: TIngredient) => (item._id === ingredientData._id ? sum + 1 : sum),
          0
        )
      : selectedBun?._id === ingredientData._id
      ? 1
      : 0;

  const [{ opacity }, ref] = useDrag({
    type: "ingredient",
    item: ingredientData,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <>
      <Link
        to={`/ingredients/${ingredientData._id}`}
        state={{ background: location }}
        className={`${styles.ingredientItem} mb-8`}
        type={type}
        style={{ opacity }}
        ref={ref}
      >
        <img className="ml-4 mr-4 mb-1" src={image} alt={name} />
        {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
        <div className={`${styles.price} mb-1`}>
          <p className="text text_type_digits-default mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      </Link>
      <Outlet />
    </>
  );
};

export default React.memo(Ingredient);
