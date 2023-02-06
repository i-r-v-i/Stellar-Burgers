import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  console.log(ingredients);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      {ingredients && (
        <main className={styles.main}>
          <BurgerIngredients />
          {/* <BurgerConstructor /> */}
        </main>
      )}
    </div>
  );
}

export default App;
