import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { IngredientDetails } from "../ingredient-details/IngredientDetails";
import styles from "./Ingredient.module.css";
import React from "react";


const Ingredient = ({data, name, price, image, type}) => {
  const [isDataModal, setDataModal] = React.useState(null);


  React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose);
    return () => {
    document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  const handleCloseModal = () => {
    setDataModal(null);
  };
  
const hahdleOpen = (data) => {
  setDataModal(data);
}

  const handleEscClose = (evt) => {
    evt.key === "Escape" && handleCloseModal();
  };


 
  return (
    
    <li className={`${styles.ingredientItem} mb-8`} type={type} onClick={hahdleOpen}>
      <img className="ml-4 mr-4 mb-1" src={image} alt={name} />
      {/* {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}  */}
      <div className={`${styles.price} mb-1`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>{name}</p>
      
      {isDataModal && (
      <Modal closePopup={handleCloseModal} title="Детали ингредиента">
        <IngredientDetails ingredient={data} />
      </Modal>
    )}
    </li>
  
  );
};

export default Ingredient;

Ingredient.prototype = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};
