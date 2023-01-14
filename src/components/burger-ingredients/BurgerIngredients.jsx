// import React from "react";
import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";

// import { IngredientDetails } from "../ingredient-details/IngredientDetails";

function BurgerIngredients({ dataList }) {
 

  return (
    <div className={styles.wrapper}>
      <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <Tabs />
        <IngredientList
          ingredients={dataList}
          ingType="bun"
          title="Булки"
        
        />
        <IngredientList
          ingredients={dataList}
          ingType="sauce"
          title="Соусы"
          
        />
        <IngredientList
          ingredients={dataList}
          ingType="main"
          title="Начинки"
          // onIngredientClick={(e)=>{hahdleOpen(e.target)}}
        />
      </section>
      {/* {isDataModal && (
        <Modal closePopup={handleCloseModal} title="Детали ингредиента">
          <IngredientDetails ingredients={isDataModal} />
        </Modal>
      )} */}
    </div>
  );
}

export default BurgerIngredients;
