import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import PriceContainer from "../price-container/PriceContainer";
import { useSelector } from "react-redux";
import styles from "./OrderItem.module.css";
import { getStoreIngredients } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { getStatus, getOrderItem, getTotalPrice } from "../utils/constants";

export default function OrderItem({ order, isStatus }) {
  const location = useLocation();
  const { number, name, createdAt, status, ingredients: orderIngs, _id } = order;
  const { ingredients } = useSelector(getStoreIngredients);


  return (
    <Link
      to={`${location.pathname}/${_id}`}
      state={{ background: location }}
      className={`${styles.element} pt-6 pb-6 pl-6 pr-6`}
    >
      <div className={styles.orderData}>
        <span className={`${styles.number} text text_type_digits-default`}>
          {`#${number}`}
        </span>
        <FormattedDate
          className="text text_type_main-default text_color_inactive"
          date={new Date(createdAt)}
        />
      </div>
      <div>
      <h2 className={`${styles.name} text text_type_main-medium mt-5 }`}>
        {name}
      </h2>
      {isStatus && (
        <p className="text text_type_main-default mt-2">{getStatus(status)}</p>
      )}
      </div>
      <div className={styles.ingredients}>
        <ul className={styles.ingredientsList}>
          {orderIngs.map((ing, index) => {
            const item = getOrderItem(ing, ingredients);
            if (index < 5) {
              return (
                <li
                  className={styles.iconItem}
                  key={index}
                  style={{ zIndex: 6 - index }}
                >
                  <img
                    className={styles.icon}
                    src={item.image_mobile}
                    alt={item.name}
                  />
                </li>
              );
            } else if (index > 5) {
              return (
                <li
                  className={styles.iconItem}
                  key={index}
                  style={{ zIndex: 6 - index }}
                >
                  <img
                    className={`${styles.icon} ${styles.lastIcon}`}
                    src={item.image_mobile}
                    alt={item.name}
                  />
                  <p className={`${styles.countIcon} "text text_type_digits-default"`}>
                    &#43;{orderIngs.length - 5}
                  </p>
                </li>
              );
            }
          })}
        </ul>
        <PriceContainer totalPrice={getTotalPrice(orderIngs, ingredients)}/>
      </div>
    </Link>
  );
}
