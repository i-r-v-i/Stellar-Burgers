import styles from "./OrderList.module.css";
import OrderItem from "../order-item/OrderItem";
import { getStoreOrders } from "../utils/constants";
import React, { useMemo } from "react";
import { FC } from 'react';
import { useAppSelector } from "../../services/types/hooks";

type TOrderListProps = {
  width: string; 
  isStatus?: boolean;
  isMyOrder?: boolean;
}

const OrderList: FC<TOrderListProps> = ({ width, isStatus, isMyOrder }) => {
  const { orders } = useAppSelector(getStoreOrders);

  const reverseOrders = useMemo(() => [...orders]?.reverse(), [orders]);
  
  return (
    <section style={{ width: width }}>
      <div className={styles.scroll}>
        <ul className={styles.orderList}>
          {isMyOrder
            ? 
            reverseOrders.map((order) => (
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
}

export default React.memo(OrderList);

