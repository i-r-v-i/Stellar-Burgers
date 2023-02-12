import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/ConstructorItem";
import styles from "./BurgerConstructor.module.css";
import { getOrderNumber } from "../utils/data";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import { ADD_ITEM, ADD_BUN, DELETE_ITEM } from "../../services/actions/burgerConstructor";
import { useDrop } from "react-dnd";



function BurgerConstructor() {
  const [isOrder, setIsOrder] = React.useState(false);
  //   const [orderNumber, setOrderNumber] = React.useState(0);

  const { selectedIngredients, selectedBun, dropIngredientSuccess } =
    useSelector((store) => store.burgerConstructor);
  const orderNumber = useSelector((store) => store.order.orderNumber);

  const dispatch = useDispatch();

  const onDropBunHandler = (item) => {
    dispatch({ type: ADD_BUN, selectedIngredient: item });
    
  };

  const onDropIngredientHandler = (item) => {
   
    dispatch({ type: ADD_ITEM, selectedIngredient: item});
    
  };

  function handleDeleteItem (uniqId) { 
    dispatch({ type: DELETE_ITEM, uniqId}); 
    
  }
  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      item.type === "bun"
        ? onDropBunHandler(item)
        : onDropIngredientHandler(item);
    },
  });
console.log(selectedIngredients);
  const handleCloseModal = (evt) => {
    // setIsOrder(false);
    evt.stopPropagation();
  };

  //   const ingredientArr = [];

  //   ingredientArr.push(randomBun._id);
  //   products.forEach((ingredient) => {
  //     ingredientArr.push(ingredient._id);
  //   });

  //   const makeOrder = async () => {
  //     try {
  //       await getOrderNumber(ingredientArr).then((data) => {
  //         setOrderNumber(data.order.number);
  //       });
  //       console.log("Заказу присвоен номер");
  //     } catch (er) {
  //       console.log(`Ошибка оформления заказа: ${er}`);
  //     }
  //   };

  //   const hahdleOpenPopupOrder = () => {
  //     makeOrder().then(() => setIsOrder(true));
  //   };

  React.useEffect(() => {
    if (selectedBun && selectedIngredients.length > 0) {
      setIsOrder(true);
    }
  }, [selectedBun, selectedIngredients]);

  const totalSum = dropIngredientSuccess && selectedBun
    ? selectedBun.price * 2 +
      selectedIngredients?.reduce((sum, item) => sum + item.price, 0)
    : 0;

console.log(selectedIngredients);
 
  return (
    <>
      <section
        className={`${styles.burgerConstructor} mt-25`}
        ref={dropTarget}
        style={
          isHover
            ? {
                boxShadow: "5px 5px 8px rgba(225, 225, 225, 0.5)",
                borderRadius: "60px",
              }
            : null
        }
      >
        <ul
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className={styles.constructorList}
        >
          {selectedBun && (
            <ConstructorItem
              isLocked={true}
              type="top"
              text={`${selectedBun.name} (верх)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image_mobile}
            />
          )}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            className={styles.scrollBarWrapper}
          >
            {selectedIngredients.length > 0 &&
              selectedIngredients.map((item, index) => (
                
                <ConstructorItem
                  index={item.uniqId}
                  key={index}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image_mobile}
                  handleClose={()=>handleDeleteItem(item.uniqId)} 
                />
                
              ))}
          </div>
          {selectedBun && (
            <ConstructorItem
              isLocked={true}
              type="bottom"
              text={`${selectedBun.name} (низ)`}
              price={selectedBun.price}
              thumbnail={selectedBun.image_mobile}
            />
          )}
        </ul>

        <div className={styles.ordering}>
          <div className={styles.sum}>
            <p className="text text_type_main-medium">{totalSum}</p>
            <div className={styles.scale}>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          {isOrder ? (
            <Button
              htmlType="submit"
              type="primary"
              size="large"

              //   onClick={hahdleOpenPopupOrder}
            >
              Оформить заказ
            </Button>
          ) : (
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              disabled
              //   onClick={hahdleOpenPopupOrder}
            >
              Оформить заказ
            </Button>
          )}
        </div>
      </section>

      {/* {isOrder && orderNumber && ( 
        <Modal closePopup={handleCloseModal}>
          
            <OrderDetails />
          
        </Modal>
       )}  */}
    </>
  );
}

export default BurgerConstructor;
