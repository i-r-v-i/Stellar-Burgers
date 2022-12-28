import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { ingredients } from "../utils/data";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients className="mr-10" />
        <BurgerConstructor />
      </main>
    </div>
  );
}

// function search(arr) {

//   arr.forEach((item) => {
//     const arrId = item.type;
//       console.log(arrId);
//   })
//   }

//   search(ingredients);

export default App;
