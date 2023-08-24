import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PriceContainer from "../price-container/PriceContainer";
import {
  getStatus,
  getOrderItem,
  getTotalPrice,
  getStoreIngredients,
} from "../utils/constants";
import { getStoreOrders } from "../utils/constants";
import { useParams } from "react-router-dom";
import styles from "./FeedDetailsView.module.css";
import { useAppSelector } from "../../services/types/hooks";

function FeedDetailsView() {
  const { orders, wsConnected } = useAppSelector(getStoreOrders);
  const { ingredients } = useAppSelector(getStoreIngredients);
  const { id } = useParams();

  const order = orders?.find((item) => item._id === id);
  const getCount = (id: string) => {
    let counter = 0;

    order?.ingredients.forEach((ingredient) => {
      if (ingredient === id) {
        counter++;
      }
    });
    return counter;
  };

  let unicItems: string[] | undefined = [];

  const geUnicItems = () => {
    return order?.ingredients.filter((item, index) => {
      return order?.ingredients.lastIndexOf(item) === index;
    });
  };
  unicItems = geUnicItems();

  return (
    wsConnected &&
    order ? (
      <>
        <h2 className={`${styles.modal_name} text text_type_main-medium mt-5 mb-2`}>
          {order?.name}
        </h2>
        <p className={`${styles.status} text text_type_main-small mb-15 `}>
          {getStatus(order.status)}
        </p>

        <h3 className="text text_type_main-medium">Состав:</h3>
        <ul className={styles.ingredients}>
          {unicItems?.map((ing, index) => {
            const item = getOrderItem(ing, ingredients);

            return (
              item && (
                <li className={styles.ingredient} key={index}>
                  <img className={styles.image} src={item.image_mobile} alt={item.name} />
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
              )
            );
          })}
        </ul>
        <div className={styles.footer}>
          <FormattedDate
            className="text text_type_main-default text_color_inactive"
            date={new Date(order.createdAt)}
          />
          <PriceContainer totalPrice={getTotalPrice(order.ingredients, ingredients)} />
        </div>
      </>
      
    )
    : null
  );
};

export default FeedDetailsView;
