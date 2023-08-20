import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorItem.module.css";
import { FC } from 'react';

interface IConstructorItemProps {
  isLocked?: boolean;
  type?: "top" | "bottom" | undefined
  text: string;
  price: number; 
  thumbnail: string;
}
const ConstructorItem: FC<IConstructorItemProps> = ({ isLocked, type, text, price, thumbnail }) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemWrapper}>
        {!isLocked && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
      />
    </li>
  );
}

export default ConstructorItem;

