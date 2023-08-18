import styles from "./PriceContainer.module.css";
import {
    CurrencyIcon
  } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";

type TTotalPriceProps = {
  totalPrice: string | undefined;
}

const PriceContainer:FC<TTotalPriceProps> = ({totalPrice}) => {
  return (
    <div className={styles.priceContainer}>
      <span className="text text_type_digits-default">{totalPrice}</span>
      <CurrencyIcon type="primary" />
    </div>
  );
}

export default PriceContainer;
