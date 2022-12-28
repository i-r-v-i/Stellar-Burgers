import Ingredient from '../ingredient/Ingredient';
import styles from "./IngredientList.module.css";

const IngredientList = ({ list, type, title }) => {
    const menu = list.filter((item) => item.type === type);
    return (
      <>
        <p className="text text_type_main-medium mt-10">{ title }</p>
        <ul className={`${styles.ingredientList} pt-6 pl-4 pr-4 `}>
          {" "}
          {menu.map((item) => (
            <Ingredient
              name={item.name}
              price={item.price}
              image={item.image}
              key = {item._id}
              type={item.type}
            />
          ))}
        </ul>
      </>
    );
  };

  export default IngredientList; 