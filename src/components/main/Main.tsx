import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import styles from "./Main.module.css";
import { getStoreIngredients } from "../utils/constants";
import { FC } from "react";
import { useAppSelector } from "../../services/types/hooks";

const Main: FC = () => {
  const { ingredients } = useAppSelector(getStoreIngredients);

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
};

export default Main;
