import ConstructorItem from "../constructor-item/ConstructorItem";
import styles from "./ConstructorList.module.css";
import { DataContext } from "../services/productsContext.js";
import React from "react";

const ConstructorList = () => {
  const dataIngredients = React.useContext(DataContext);

  const buns = React.useMemo(
    () => dataIngredients.filter((item) => item.type === "bun"),
    []
  );
  const randomBun = buns[Math.floor(Math.random() * buns.length)];

  const products = React.useMemo(
    () => dataIngredients.filter((item) => item.type !== "bun"),
    []
  );

  return (
    <ul
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      className={styles.constructorList}
    >
      <ConstructorItem
        isLocked={true}
        type="top"
        text={`${randomBun.name} (верх)`}
        price={randomBun.price}
        thumbnail={randomBun.image_mobile}
      />
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className={styles.scrollBarWrapper}
      >
        {products.map((item) => (
          <ConstructorItem
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
          />
        ))}
      </div>
      <ConstructorItem
        isLocked={true}
        type="bottom"
        text={`${randomBun.name} (низ)`}
        price={randomBun.price}
        thumbnail={randomBun.image_mobile}
      />
    </ul>
  );
};

export default ConstructorList;
