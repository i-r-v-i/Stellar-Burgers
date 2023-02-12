import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import { useSelector, useDispatch } from "react-redux";
import { DATA_MODAL_FAILED } from "../../services/actions/currentIngredient";
// import { useDrag } from "react-dnd";
import { useRef, useState } from 'react';

function BurgerIngredients() {
  const dataModal = useSelector((store) => store.currentIngredient.dataModal);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState('Булки');
  
  const bunSection = useRef(null);
  const sauceSection = useRef(null);
  const mainSection = useRef(null);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    setActiveTab(sectionRef.current.scrollTop)
}

function activateTab(){
  if (activeTab >= 0 && activeTab <= bunSection.current.offsetHeight ) {
      setCurrent('bun');
      return
  }
  else if (activeTab > bunSection.current.offsetHeight && activeTab <= (bunSection.current.offsetHeight + sauceSection.current.offsetHeight)) {
      setCurrent('sauce');
      return
  }
  else {
      setCurrent('main')
  }
}

  const handleCloseModal = (evt) => {
    dispatch({ type: DATA_MODAL_FAILED });
    evt.stopPropagation();
  };

  return (
    <>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`} ref={sectionRef} onScroll={activateTab}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <Tabs />
        <div className={styles.wrapper}>
          <IngredientList ingType="bun" title="Булки" ref={bunSection}/>
          <IngredientList ingType="sauce" title="Соусы" ref={sauceSection}/>
          <IngredientList ingType="main" title="Начинки" ref={mainSection}/>
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
