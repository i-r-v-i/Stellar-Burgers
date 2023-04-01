import styles from "./FeedOrderDetails.module.css";
import PropTypes from "prop-types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PriceContainer from "../price-container/PriceContainer";
import { useParams } from "react-router-dom";
import { getStoreOrders } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { URL, getStoreIngredients } from "../utils/constants";
import {
  WS_CONNECTING,
  WS_DISCONNECTING,
} from "../../services/actions/wsActions";
import { getStatus, getOrderItem, getTotalPrice } from "../utils/constants";
import { getCookie } from "../utils/cookie";

export default function FeedOrderDetails({ isModal, allOrders }) {
  const dispatch = useDispatch();
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

  const { orders, wsConnected } = useSelector(getStoreOrders);
  const { ingredients } = useSelector(getStoreIngredients);
  const order = orders?.find((item) => item._id === id);

  let unicItems = [];

  const geUnicItems = () => {
    return order?.ingredients.filter((item, index) => {
      return order?.ingredients.lastIndexOf(item) === index;
    });
  };
  unicItems = geUnicItems();

  const getCount = (id) => {
    let counter = 0;

    order?.ingredients.forEach((ingredient) => {
      if (ingredient === id) {
        counter++;
      }
    });

    return counter;
  };

  const FeedDetailsView = () => {
    return (
      wsConnected &&
      order && (
        <>
          <h2
            className={`${styles.modal_name} text text_type_main-medium mt-5 mb-2`}
          >
            {order?.name}
          </h2>
          <p className={`${styles.status} text text_type_main-small mb-15 `}>
            {getStatus(order.status)}
          </p>

          <h3 className="text text_type_main-medium">Состав:</h3>
          <ul className={styles.ingredients}>
            {unicItems.map((ing, index) => {
              const item = getOrderItem(ing, ingredients);

              return (
                <li className={styles.ingredient} key={index}>
                  <img
                    className={styles.image}
                    src={item.image_mobile}
                    alt={item.name}
                  />
                  <p className={`${styles.name} text text_type_main-default`}>
                    {item.name}
                  </p>
                  <div className={styles.priceContainer}>
                    <span className="text text_type_digits-default">{`${getCount(
                      item._id
                    )} x ${item.price}`}</span>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.footer}>
            <FormattedDate
              className="text text_type_main-default text_color_inactive"
              date={new Date(order.createdAt)}
            />
            <PriceContainer
              totalPrice={getTotalPrice(order.ingredients, ingredients)}
            />
          </div>
        </>
      )
    );
  };

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
}

FeedOrderDetails.prototype = {
  allOrders: PropTypes.bool,
  isModal: PropTypes.bool,
};
