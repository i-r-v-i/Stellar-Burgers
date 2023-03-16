import styles from "./Feed.module.css";
import PropTypes from "prop-types";
import OrderList from "../order-list/OrderList";

export default function Feed() {
  return (
    <div className={`${styles.container} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-large pb-5`}>
        Лента заказов
      </h1>
      <div className={`${styles.blokContainer}`}>
        <OrderList />
        
      </div>
    </div>
  );
}
