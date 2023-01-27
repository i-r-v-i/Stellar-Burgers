import Ingredient from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import React from "react";
import PropTypes from "prop-types";
import { IngredientPropType } from "../types/common-types.js";
import { DataContext } from "../services/productsContext.js";


const IngredientList = ({ ingType, title }) => {
  const dataIngredients = React.useContext(DataContext);
  const menu = React.useMemo(
    () => dataIngredients.filter((item) => item.type === ingType),
    [ingType]
  );
 
  return (
    <>
      <p className="text text_type_main-medium mt-10">{title}</p>
      <ul className={`${styles.ingredientList} pt-6 pl-4 pr-2 `}>
        {menu.map((item) => (
          <Ingredient
            data={item}
            name={item.name}
            price={item.price}
            image={item.image}
            key={item._id}
            type={item.type}
          />
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

IngredientList.propTypes = {
  
  ingType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
