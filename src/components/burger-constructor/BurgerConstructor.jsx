import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/ConstructorItem";
// import ConstructorList from "../constructor-list/ConstructorList";
import styles from "./BurgerConstructor.module.css";

import {
  TotalPriceContext,
  DataContext,
  OrderNumberContext,
} from "../services/productsContext.js";
import { getOrderNumber } from "../utils/data";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "../order-details/OrderDetails";

function BurgerConstructor() {
  const [isOrder, setIsOrder] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState(0);
  const { totalPrice, setTotalPrice } = React.useContext(TotalPriceContext);
  const dataIngredients = React.useContext(DataContext);

  const buns = React.useMemo(
    () => dataIngredients.filter((item) => item.type === "bun"),
    [dataIngredients]
  );
  const randomBun = buns[Math.floor(Math.random() * buns.length)];

  const products = React.useMemo(
    () => dataIngredients.filter((item) => item.type !== "bun"),
    [dataIngredients]
  );

  const handleCloseModal = (evt) => {
    setIsOrder(false);
    evt.stopPropagation();
  };

  const ingredientArr = [];

  ingredientArr.push(randomBun._id);
  products.forEach((ingredient) => {
    ingredientArr.push(ingredient._id);
  });
  

  const makeOrder = async () => {
    try {
      await getOrderNumber(ingredientArr).then((data) => {
        setOrderNumber(data.order.number);
      });
      console.log("Заказу присвоен номер");
    } catch (er) {
      console.log(`Ошибка оформления заказа: ${er}`);
    }
  };

  const hahdleOpenPopupOrder = () => {
    makeOrder().then(() => setIsOrder(true));
  };

  React.useEffect(() => {
    const total = products.reduce(
      (acc, p) => acc + p.price,
      randomBun.price * 2
    );
    setTotalPrice(total);
  }, [randomBun]);

  return (
    <section className={`${styles.burgerConstructor} mt-25`}>
      <ul
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className={styles.constructorList}
      >
        <ConstructorItem
          isLocked={true}
          type="top"
          text={`${randomBun.name} (верх)`}
          price={randomBun.price}
          thumbnail={randomBun.image_mobile}
        />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className={styles.scrollBarWrapper}
        >
          {products.map((item) => (
            <ConstructorItem
              key={item._id}
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          ))}
        </div>
        <ConstructorItem
          isLocked={true}
          type="bottom"
          text={`${randomBun.name} (низ)`}
          price={randomBun.price}
          thumbnail={randomBun.image_mobile}
        />
      </ul>

      <div className={styles.ordering}>
        <div className={styles.sum}>
          <p className="text text_type_main-medium">{totalPrice}</p>
          <div className={styles.scale}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          onClick={hahdleOpenPopupOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {isOrder && orderNumber && (
        <Modal closePopup={handleCloseModal}>
          <OrderNumberContext.Provider value={orderNumber}>
            <OrderDetails />
          </OrderNumberContext.Provider>
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
