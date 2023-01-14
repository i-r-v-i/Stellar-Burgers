import ConstructorItem from "../constructor-item/ConstructorItem";
import styles from "./ConstructorList.module.css";

const ConstructorList = () => {
  return (
    <ul
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      className={styles.constructorList}
    >
      <ConstructorItem
        isLocked={true}
        type="top"
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />
      <div
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        className={styles.scrollBarWrapper}
      >
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
        <ConstructorItem
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
      </div>
      <ConstructorItem
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
      />
    </ul>
  );
};

export default ConstructorList;
