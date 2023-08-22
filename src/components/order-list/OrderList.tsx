import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";
import { useSelector } from "react-redux";
import { getStoreOrders } from "../utils/constants";
import React, { FC, useMemo } from "react";

interface IOrderListProps {
  width: string;
  isStatus: boolean;
  isMyOrder?: boolean;
}

const OrderList: FC<IOrderListProps> = ({ width, isStatus, isMyOrder }) => {
  const { orders } = useSelector(getStoreOrders);

  const reverseOrders = useMemo(() => [...orders]?.reverse(), [orders]);

  return (
    <section style={{ width: width }}>
      <div className={styles.scroll}>
        <ul className={styles.orderList}>
          {isMyOrder
            ? reverseOrders.map((order) => (
                <li key={order._id}>
                  <OrderItem order={order} isStatus={isStatus} />
                </li>
              ))
            : orders?.map((order) => (
                <li key={order._id}>
                  <OrderItem order={order} isStatus={isStatus} />
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default React.memo(OrderList);
