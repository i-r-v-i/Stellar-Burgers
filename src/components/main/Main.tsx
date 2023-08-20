import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { useSelector } from "react-redux";
import styles from "./Main.module.css";
import { getStoreIngredients } from "../utils/constants";
import { FC } from "react";

const Main: FC = () => {
  const { ingredients } = useSelector(getStoreIngredients);

  return (
    <DndProvider backend={HTML5Backend}>
      {ingredients && (
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </DndProvider>
  );
}

export default Main;