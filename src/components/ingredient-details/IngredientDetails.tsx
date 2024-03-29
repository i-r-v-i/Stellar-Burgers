import styles from "./IngredientDetails.module.css";
import { useParams } from "react-router-dom";
import { getStoreIngredients } from "../utils/constants";
import { FC } from "react";
import { useAppSelector } from "../../services/types/hooks";

interface IIngredientDetailsProps {
  bac: boolean;
}

const IngredientDetails: FC<IIngredientDetailsProps> = ({ bac }) => {
  const { id } = useParams();
  const { ingredients } = useAppSelector(getStoreIngredients);
  const ingredient = ingredients?.find((ingredient) => ingredient._id === id);

  const IngredientDetailsModal = () => {
    return ingredient ? (
      <div className={styles.container}>
        <img className="mb-4" src={ingredient.image_large} alt={ingredient.name} />
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
    ) : null;
  };

  const IngredientDetailsRoute: FC = () => {
    return ingredient ? (
      <div className={`${styles.routeStyle}`}>
        <h1 className={`${styles.title} text text_type_main-large`}>
          Детали ингредиента
        </h1>
        <img className="mb-4" src={ingredient.image_large} alt={ingredient.name}></img>
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
    ) : null;
  };

  return bac ? <IngredientDetailsModal /> : <IngredientDetailsRoute />;
};

export default IngredientDetails;
