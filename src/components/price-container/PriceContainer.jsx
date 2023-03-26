import styles from "./PriceContainer.module.css";
import {
    CurrencyIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";


export default function PriceContainer({totalPrice}) {
  return (
    <div className={styles.priceContainer}>
      <span className="text text_type_digits-default">{totalPrice}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}
