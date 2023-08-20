import styles from "./OrderDetails.module.css";
import { useSelector } from "react-redux";
import { getOrderNumber } from "../utils/constants";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

const OrderDetails:FC = () => {
  const { orderNumber } = useSelector(getOrderNumber);

  return orderNumber ? (
    <div className={styles.container}>
      <p className="text text_type_digits-large mb-8 mt-4">{orderNumber} </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={`mb-15 ${styles.checkbox}`}></div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default mb-15">
        Заберите заказ на орбитальной станции
      </p>
    </div>
  ) : (
    <div className={styles.container}>
      <p className="text text_type_main-medium mb-20 mt-4">
        Регистрируем ваш заказ...
      </p>
      <div className={`${styles.scale} mb-15`}>
        <ListIcon type="primary" />
        <ListIcon type="primary" />
        <ListIcon type="primary" />
      </div>
      <div className={styles.text}>
        <p className="text text_type_main-default">
          Дождитесь регистрации заказа
        </p>
        <p className="text text_type_main-default mb-15 mt-12">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;