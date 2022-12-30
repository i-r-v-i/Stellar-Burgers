import Ingredient from '../ingredient/Ingredient';
import styles from "./IngredientList.module.css";
import PropTypes from 'prop-types';
import {IngredientPropType } from '../../utils/data';

const IngredientList = ({ list, type, title }) => {
    const menu = list.filter((item) => item.type === type);
    return (
      <>
        <p className="text text_type_main-medium mt-10">{ title }</p>
        <ul className={`${styles.ingredientList} pt-6 pl-4 pr-2 `}>
          
          {menu.map((item) => (
            <Ingredient
              name={item.name}
              price={item.price}
              image={item.image}
              key = {item._id}
              type={item.type}
              count = {item.count}
            />
          ))}
        </ul>
      </>
    );
  };

  export default IngredientList; 

  IngredientList.propTypes = {
    list: PropTypes.arrayOf(IngredientPropType).isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }