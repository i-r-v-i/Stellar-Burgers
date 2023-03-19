import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";

export default function OrderList({width}) {
  return (

    <section style= {{width: width}}>
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
