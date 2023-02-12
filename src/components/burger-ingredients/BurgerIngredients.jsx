import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { DATA_MODAL_FAILED } from "../../services/actions/currentIngredient";
// import { useDrag } from "react-dnd";

function BurgerIngredients() {
  const dataModal = useSelector((store) => store.currentIngredient.dataModal);
  const dispatch = useDispatch();

 

  const handleCloseModal = (evt) => {
    dispatch({ type: DATA_MODAL_FAILED });
    evt.stopPropagation();
  };

  return (
    <>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <Tabs />
        <div className={styles.wrapper}>
          <IngredientList ingType="bun" title="Булки" />
          <IngredientList ingType="sauce" title="Соусы" />
          <IngredientList ingType="main" title="Начинки" />
        </div>
      </section>

      {dataModal && (
        <Modal closePopup={handleCloseModal} title="Детали ингредиента">
          <IngredientDetails ingredient={dataModal} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
