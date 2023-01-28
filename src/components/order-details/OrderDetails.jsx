import React from "react";
import styles from "./OrderDetails.module.css";
import { OrderNumberContext } from "../services/productsContext.js";

export function OrderDetails() {
  const orderNumber = React.useContext(OrderNumberContext);

  return (
    <div className={styles.container}>
      <p className="text text_type_digits-large mb-8 mt-4">{orderNumber}</p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={`mb-15 ${styles.checkbox}`}></div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
