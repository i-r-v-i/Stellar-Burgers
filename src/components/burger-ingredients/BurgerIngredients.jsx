import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { DATA_MODAL_FAILED } from "../../services/actions/currentIngredient";
import { useEffect } from "react";
import { setActiveTab } from "../../services/actions/activeTab";

function BurgerIngredients() {
  const dataModal = useSelector((store) => store.currentIngredient.dataModal);
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    const callback = (entries) => {
      dispatch(setActiveTab(entries[0].target.id));
    };
    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("#scrollSection"),
      rootMargin: "0px 0px 400% 0px",
      threshold: 1,
    });

    const bunSection = document.getElementById("bun");
    const sauceSection = document.getElementById("sauce");
    const mainSection = document.getElementById("main");

    observer.observe(bunSection);
    observer.observe(sauceSection);
    observer.observe(mainSection);
  }, []);

  const handleCloseModal = (evt) => {
    dispatch({ type: DATA_MODAL_FAILED });
    evt.stopPropagation();
  };

  return (
    <>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <Tabs />
        <div className={styles.wrapper} id="scrollSection">
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
