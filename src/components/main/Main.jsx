import { DndProvider } from "react-dnd";
 import { HTML5Backend } from "react-dnd-html5-backend";
 import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
 import BurgerConstructor from "../burger-constructor/BurgerConstructor";
 import { useEffect } from "react";
 import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";

export default function Main() {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      {ingredients && (
        <main className={styles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
      </main>)}
    </DndProvider>
  );
};
