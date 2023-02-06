import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";

function BurgerIngredients() {
  return (
    <div className={styles.wrapper}>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <Tabs />
        <IngredientList ingType="bun" title="Булки" />
        <IngredientList ingType="sauce" title="Соусы" />
        <IngredientList ingType="main" title="Начинки" />
      </section>
    </div>
  );
}

export default BurgerIngredients;
