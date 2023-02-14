import PropTypes from "prop-types";
import { IngredientPropType } from "../../components/types/common-types";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorFillingItem.module.css";
import { SORT_ITEM } from "../../services/actions/burgerConstructor";

function ConstructorFillingItem({ ingredient, index, handleClose }) {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [{ opacity }, drag] = useDrag({
    type: "filling",
    item: index,
    collect: (monitor) => {
      return {
        opacity: monitor.isDragging() ? 0.5 : 1,
      };
    },
  });

  const [, drop] = useDrop({
    accept: "filling",
    hover(ingredient) {
      if (!ref.current) {
        return;
      }
      const dragIndex = ingredient.index;
      const dropIndex = index;
      dispatch({
        type: SORT_ITEM,
        dragIndex,
        dropIndex,
      });
      ingredient.index = dropIndex;
    },
  });

  drag(drop(ref));

  return (
    <li className={styles.item} ref={ref} style={{ opacity }}>
      <div className={styles.itemWrapper}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        uniqId={ingredient.uniqId}
        handleClose={handleClose}
      />
    </li>
  );
}

export default ConstructorFillingItem;

ConstructorFillingItem.propTypes = {
  ingredient: PropTypes.shape(IngredientPropType).isRequired,
  index: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired,
};
