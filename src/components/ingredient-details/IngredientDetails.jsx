import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { IngredientPropType } from "../types/common-types.js";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


export function IngredientDetails() {
   const { id } = useParams();
  const ingredients = useSelector((store) => store.ingredients.ingredients);
  const ingredient = ingredients?.find((ingredient) => ingredient._id === id);


  return (
    <div className={styles.container}>
      <img
        className="mb-4"
        src={ingredient.image_large}
        alt={ingredient.name}
      ></img>
      <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
      <div className={styles.energyValue}>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.textCenter}`}
        >
          Калории,ккал
        </p>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.textCenter}`}
        >
          Белки, г
        </p>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.textCenter}`}
        >
          Жиры, г
        </p>
        <p
          className={`text text_type_main-default text_color_inactive ${styles.textCenter}`}
        >
          Углеводы, г
        </p>
        <p
          className={`text text_type_digits-default text_color_inactive ${styles.textCenter}`}
        >
          {ingredient.calories}
        </p>
        <p
          className={`text text_type_digits-default text_color_inactive ${styles.textCenter}`}
        >
          {ingredient.proteins}
        </p>
        <p
          className={`text text_type_digits-default text_color_inactive ${styles.textCenter}`}
        >
          {ingredient.fat}
        </p>
        <p
          className={`text text_type_digits-default text_color_inactive ${styles.textCenter}`}
        >
          {ingredient.carbohydrates}
        </p>
      </div>
    </div>
  );
}

IngredientDetails.prototype = {
  ingredient: PropTypes.shape(IngredientPropType).isRequired,
};
