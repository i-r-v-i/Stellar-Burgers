import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";
import { useSelector } from "react-redux";
import { getStoreOrders } from "../utils/constants";

export default function OrderList({ width, isStatus }) {
  const { orders } = useSelector(getStoreOrders);

   
  return (
    <section style={{ width: width }}>
      <div className={styles.scroll}>
        <ul className={styles.orderList}>
          {orders?.map((order) => (
              <li key={order._id}>
                <OrderItem order={order} isStatus = {isStatus} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
