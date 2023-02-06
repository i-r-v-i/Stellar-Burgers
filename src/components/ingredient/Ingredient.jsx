import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import styles from "./Ingredient.module.css";
import { IngredientPropType } from "../types/common-types.js";
import { useSelector, useDispatch  } from "react-redux";
import {
  DATA_MODAL_SUCCESS,
  DATA_MODAL_FAILED,
} from "../../services/actions/currentIngredient";


const Ingredient = ({ data, name, price, image, type, count }) => {
  const dataModal = useSelector(store => store.currentIngredient.dataModal);
  const dispatch = useDispatch();

  const handleCloseModal = (evt) => {
   dispatch({type: DATA_MODAL_FAILED});
    evt.stopPropagation();
  };

  const hahdleOpen = (data) => {
    dispatch({type: DATA_MODAL_SUCCESS, payload: data});
  };
 
  return (
    <li
      className={`${styles.ingredientItem} mb-8`}
      type={type}
      onClick={() => hahdleOpen(data)}
    >
      <img className="ml-4 mr-4 mb-1" src={image} alt={name} />
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      <div className={`${styles.price} mb-1`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>

      {dataModal && (
        <Modal closePopup={handleCloseModal} title="Детали ингредиента">
          <IngredientDetails ingredient={dataModal} />
        </Modal>
      )}
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
