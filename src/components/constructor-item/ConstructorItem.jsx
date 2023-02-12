import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ConstructorItem.module.css";
import { useSelector, useDispatch } from "react-redux";



const ConstructorItem = ({ isLocked, type, text, price, thumbnail }, handleClose) => {

//   const dispatch = useDispatch();
 
//   const handleDeleteItem = (item, id)=>{ 
//   dispatch(DELETE_ITEM(item, id)); 
// }

  return (
    <li className={styles.item} >
      <div className={styles.itemWrapper}>
        {!isLocked && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
        handleClose={ handleClose} 
      />
      
    </li>
  );
};

export default ConstructorItem;

ConstructorItem.propTypes = {
  isLocked: PropTypes.bool,
  type: PropTypes.oneOf(["top", "bottom", undefined]),
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
