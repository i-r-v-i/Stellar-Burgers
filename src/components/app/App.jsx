import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { getData } from "../utils/data";

import { DataContext } from "../services/productsContext.js";
import { TotalPriceContext } from "../services/productsContext.js";

function App() {
  const [dataIngredients, setIngredients] = React.useState();
  const [totalPrice, setTotalPrice] = React.useState(0);

  const getIngredients = async () => {
    try {
      await getData().then((data) => setIngredients(data.data));
      console.log("Успешная загрузка");
    } catch (er) {
      console.log(`При загрузке данных с сервера что-то пошло не так: ${er}`);
    }
  };

  React.useEffect(() => {
    getIngredients();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <DataContext.Provider value={dataIngredients}>
        <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
          {dataIngredients && (
            <main className={styles.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          )}
        </TotalPriceContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
