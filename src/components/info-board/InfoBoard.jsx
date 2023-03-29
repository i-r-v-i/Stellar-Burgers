import styles from "./InfoBoard.module.css";
import { getStoreOrders, orderStatus } from "../utils/constants";
import { useSelector } from "react-redux";

export default function InfoBoard() {
  const { orders, totalOrders, todayOrders } = useSelector(getStoreOrders);

  return (
    <section className={`${styles.gridContainer} pl-15`}>
      <div className={`${styles.ready}`}>
        <span className="text text_type_main-medium">Готовы:</span>
        <ul className={styles.orderList}>
          {orders?.map(
            (order, index) =>
              order.status === orderStatus.done && (
                <li
                  key={index}
                  className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
                >
                  {order.number}
                </li>
              )
          )}
        </ul>
      </div>
      <div className={`${styles.inProcess}`}>
        <span className="text text_type_main-medium pb-6">В работе:</span>
        <ul className={styles.orderList}>
          {orders?.map(
            (order, index) =>
              order.status === orderStatus.pending && (
                <li
                  key={index}
                  className={`text text_type_digits-default pb-2 pr-2`}
                >
                  {order.number}
                </li>
              )
          )}
        </ul>
      </div>
      <div className={`${styles.all}`}>
        <p className="text text_type_main-medium">
          Выполнено&nbsp;за&nbsp;все&nbsp;время:
        </p>
        <p className="text text_type_digits-large">{totalOrders}</p>
      </div>
      <div className={`${styles.today}`}>
        <p className="text text_type_main-medium">
          Выполнено&nbsp;за&nbsp;сегодня:
        </p>
        <p className="text text_type_digits-large">{todayOrders}</p>
      </div>
    </section>
  );
}
