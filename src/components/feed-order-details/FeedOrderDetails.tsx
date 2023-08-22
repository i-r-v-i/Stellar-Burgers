import styles from "./FeedOrderDetails.module.css";
import { useParams } from "react-router-dom";
import { getStoreOrders } from "../utils/constants";
import { FC, useEffect } from "react";
import { URL } from "../utils/constants";
import { WS_CONNECTING, WS_DISCONNECTING } from "../../services/actions/wsActions";

import { getCookie } from "../utils/cookie";
import FeedDetailsView from "../feed-details-view/FeedDetailsView";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

type TFeedOrderDetailsProps = {
  isModal: boolean;
  allOrders: boolean;
};

const FeedOrderDetails: FC<TFeedOrderDetailsProps> = ({ isModal, allOrders }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  let token = getCookie("accessToken")?.split(" ")[1];

  useEffect(() => {
    if (allOrders) {
      dispatch({
        type: WS_CONNECTING,
        payload: `${URL.socket}/all`,
      });
    } else {
      dispatch({
        type: WS_CONNECTING,
        payload: `${URL.socket}?token=${token}`,
      });
    }
    return () => {
      dispatch({
        type: WS_DISCONNECTING,
      });
    };
  }, [dispatch, token]);

  const { orders } = useAppSelector(getStoreOrders);
  const order = orders?.find((item) => item._id === id);

  return isModal ? (
    <FeedDetailsView />
  ) : (
    <section className={styles.wrapperRoute}>
      <div className={`${styles.routeStyle}`}>
        <h1 className={`${styles.number} text text_type_digits-default`}>
          {`#${order?.number}`}
        </h1>
        <FeedDetailsView />
      </div>
    </section>
  );
};

export default FeedOrderDetails;
