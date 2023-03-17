import styles from "./Feed.module.css";
import PropTypes from "prop-types";
import OrderList from "../../components/order-list/OrderList";
import InfoBoard from "../../components/info-board/InfoBoard";


export default function Feed() {
  return (
    <main className={`${styles.container} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-large pb-5`}>
        Лента заказов
      </h1>
      <div className={`${styles.bloksContainer}`}>
        <OrderList />
        <InfoBoard/>
      </div>
    </main>
  );
}
