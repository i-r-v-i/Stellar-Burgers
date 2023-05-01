import { useRef } from "react";
import { useDrag, useDrop,  XYCoord } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorFillingItem.module.css";
import { SORT_ITEM } from "../../services/actions/burgerConstructor";
import { useAppDispatch } from "../../services/types/hooks";
import { FC } from 'react';
import { TConstructorElement } from "../../services/types/burgerConstructor";

type TConstructorFillingItemProps = {
  ingredient: TConstructorElement;
  index: number;
  handleClose: () => void;
}

type TDropItem = {
  id: string;
  index: number;
}

const ConstructorFillingItem: FC<TConstructorFillingItemProps> = ({ ingredient, index, handleClose }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{ opacity }, drag] = useDrag({
    type: "filling",
    item: { ingredient, index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  const [, drop] = useDrop<TDropItem,  unknown,  { ingredient: TDropItem }
  >({
    accept: "filling",
    hover(ingredient, monitor) {
      if (!ref.current) return;

      const dragIndex = ingredient.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      dispatch({
        type: SORT_ITEM,
        dragIndex,
        hoverIndex,
      });
      ingredient.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <li className={styles.item} ref={ref} style={{ opacity }}>
      <div className={styles.itemWrapper}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.ingredient.name}
        price={ingredient.ingredient.price}
        thumbnail={ingredient.ingredient.image_mobile}
        handleClose={handleClose}
      />
    </li>
  );
}

export default ConstructorFillingItem;

// ConstructorFillingItem.propTypes = {
//   ingredient: PropTypes.shape(IngredientPropType).isRequired,
//   index: PropTypes.number.isRequired,
//   handleClose: PropTypes.func.isRequired,
// };
