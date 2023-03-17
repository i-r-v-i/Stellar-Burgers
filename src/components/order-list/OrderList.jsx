import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";

export default function OrderList() {
  return (

    <section className={styles.orderSection}>
        <div className={styles.scroll}>
      <ul className={styles.orderList}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
      </div>
    </section>
  );
}
