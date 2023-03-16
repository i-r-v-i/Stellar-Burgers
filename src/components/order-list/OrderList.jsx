import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";

export default function OrderList() {
  return (
    <ul className={styles.orderList}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </ul>
  );
}
