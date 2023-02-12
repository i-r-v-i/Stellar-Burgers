import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { DATA_MODAL_FAILED } from "../../services/actions/currentIngredient";
// import { useDrag } from "react-dnd";
import { useRef, useState } from "react";
import React from "react";

function BurgerIngredients() {
  const dataModal = useSelector((store) => store.currentIngredient.dataModal);
  const dispatch = useDispatch();

  // const [activeTab, setActiveTab] = useState("bun");

  // const objRef = {
  //   bunsRef: useRef(null),
  //   saucesRef: useRef(null),
  //   mainsRef: useRef(null),
  // };
  // const bunsRef = useRef(null);
  // const saucesRef = useRef(null);
  // const mainsRef = useRef(null);
  // const sectionRef = useRef(null);

  // const handleScroll = () => {
  //   setActiveTab(sectionRef.current.scrollTop);
  // };

  // React.useEffect(() => {
  //   sectionRef.current.addEventListener("scroll", handleScroll);
  //   return () => sectionRef.current.removeEventListener("scroll", handleScroll);
  // }, []);

  // function activateTab() {
  //   if (activeTab >= 0 && activeTab <= bunsRef.current.offsetHeight) {
  //     setCurrent("bun");
  //     return;
  //   } else if (
  //     activeTab > bunsRef.current.offsetHeight &&
  //     activeTab <=
  //     bunsRef.current.offsetHeight + saucesRef.current.offsetHeight
  //   ) {
  //     setCurrent("sauce");
  //     return;
  //   } else {
  //     setCurrent("main");
  //   }
  // }

  const handleCloseModal = (evt) => {
    dispatch({ type: DATA_MODAL_FAILED });
    evt.stopPropagation();
  };

  return (
    <>
      <section
        className={`${styles.burgerIngredients} mb-10 pt-10`}
        // ref={sectionRef}
        // onScroll={activateTab}
      >
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
