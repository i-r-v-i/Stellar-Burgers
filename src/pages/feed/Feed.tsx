import styles from "./Feed.module.css";
import OrderList from "../../components/order-list/OrderList";
import InfoBoard from "../../components/info-board/InfoBoard";
import { FC, useEffect } from "react";
import { WS_CONNECTING, WS_DISCONNECTING } from "../../services/actions/wsActions";
import { URL } from "../../components/utils/constants";
import { useAppDispatch } from "../../services/types/hooks";

const Feed: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTING,
      payload: `${URL.socket}/all`,
    });
    return () => {
      dispatch({
        type: WS_DISCONNECTING,
      });
    };
  }, [dispatch]);

  return (
    <main className={`${styles.container} pt-10`}>
      <h1 className={`${styles.title} text text_type_main-large pb-5`}>Лента заказов</h1>
      <div className={`${styles.bloksContainer}`}>
        <OrderList width={"600px"} isStatus={false} />
        <InfoBoard />
      </div>
    </main>
  );
};

export default Feed;
