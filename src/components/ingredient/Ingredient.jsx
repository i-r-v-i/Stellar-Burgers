import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
// import { Modal } from "../modal/Modal";
// import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import styles from "./Ingredient.module.css";
import { IngredientPropType } from "../types/common-types.js";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import {
  DATA_MODAL_SUCCESS

} from "../../services/actions/currentIngredient";
import { useSelector } from "react-redux";

const Ingredient = ({ data, name, price, image, type }) => {
 
  const { selectedIngredients, selectedBun } = useSelector(
    (store) => store.burgerConstructor
  );
 
  const count = data.type !== 'bun' ? selectedIngredients?.reduce((sum, item) => item._id === data._id ? sum + 1 : sum, 0) : 
  selectedBun?._id === data._id ? 1 : 0;
  const dispatch = useDispatch();

  const hahdleOpen = (data) => {
    dispatch({ type: DATA_MODAL_SUCCESS, payload: data });
  };

  const [{ opacity }, ref] = useDrag({
    type: 'ingredient',
    item: data,
    collect: monitor => ({
        opacity: monitor.isDragging() ? 0.5 : 1
    })
});


  return (
    <li
      className={`${styles.ingredientItem} mb-8`}
      type={type}
      onClick={() => hahdleOpen(data)}
      style={{opacity: {opacity}}}
      ref={ref}
    >
      <img className="ml-4 mr-4 mb-1" src={image} alt={name} />
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      <div className={`${styles.price} mb-1`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
    </li>
  );
};

export default Ingredient;

Ingredient.prototype = {
  data: PropTypes.shape(IngredientPropType).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.number,
};
