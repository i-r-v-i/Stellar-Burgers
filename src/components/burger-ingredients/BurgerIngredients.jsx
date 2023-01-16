import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { IngredientPropType } from "../types/common-types.js";
import PropTypes from "prop-types";

function BurgerIngredients({ dataList }) {
  return (
    <div className={styles.wrapper}>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <Tabs />
        <IngredientList ingredients={dataList} ingType="bun" title="Булки" />
        <IngredientList ingredients={dataList} ingType="sauce" title="Соусы" />
        <IngredientList ingredients={dataList} ingType="main" title="Начинки" />
      </section>
    </div>
  );
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  dataList : PropTypes.arrayOf(IngredientPropType).isRequired,
};
