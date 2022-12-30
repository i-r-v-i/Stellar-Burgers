import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from "./Ingredient.module.css";


const Ingredient = ({ name, price, image, type, count }) => {
  return (
    <li className={`${styles.ingredientItem} mb-8`} type={type}>
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
   name: PropTypes.string,
   price: PropTypes.number, 
   image: PropTypes.string, 
   type: PropTypes.string,  
   count: PropTypes.number
}