import React from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/AppHeader";
import BurgerIngredients from "../burger-ingredients/BurgerIngredients";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";
import { getData } from "../utils/data";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "../order-details/OrderDetails";
import { DataContext } from "../services/productsContext.js";

function App() {
  const [dataIngredients, setIngredients] = React.useState();
  const [isOrder, setIsOrder] = React.useState(false);

  const handleCloseModal = (evt) => {
    setIsOrder(false);
    evt.stopPropagation();
  };

  const hahdleOpenPopupOrder = () => {
    setIsOrder(true);
  };
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
      { dataIngredients && (
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor openPopupOrder={hahdleOpenPopupOrder} />
        </main>
      )}
 </DataContext.Provider>
      {isOrder && (
        <Modal closePopup={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
     
    </div>
  );
}

export default App;
