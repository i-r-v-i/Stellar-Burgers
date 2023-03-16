import styles from "./PriceContainer.module.css";
import {
    CurrencyIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";


export default function PriceContainer() {
  return (
    <div className={styles.priceContainer}>
      <span className="text text_type_digits-default">510</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}
