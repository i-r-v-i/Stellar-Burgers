import React from "react";
import { useEffect } from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/ConstructorItem";
import styles from "./BurgerConstructor.module.css";
import ConstructorFillingItem from "../constructor-filling-item/ConstructorFillingItem";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "../order-details/OrderDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_ITEM,
  ADD_BUN,
  DELETE_ITEM,
  CLEAR_STATE,
} from "../../services/actions/burgerConstructor";
import { useDrop } from "react-dnd";
import { GET_NUMBER_FAILED, makeOrder } from "../../services/actions/order";

function BurgerConstructor() {
  const [isOrder, setIsOrder] = React.useState(false);

  const { selectedIngredients, selectedBun, dropIngredientSuccess } =
    useSelector((store) => store.burgerConstructor);

  const { modalOpened } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const onDropBunHandler = (item) => {
    dispatch({ type: ADD_BUN, selectedIngredient: item });
  };

  const onDropIngredientHandler = (item) => {
    dispatch({ type: ADD_ITEM, selectedIngredient: item });
  };

  function handleDeleteItem(uniqId) {
    dispatch({ type: DELETE_ITEM, uniqId });
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

  const handleCloseModal = (evt) => {
    dispatch({ type: GET_NUMBER_FAILED });
    dispatch({ type: CLEAR_STATE });
    evt.stopPropagation();
  };

  const ingredientArr = [];
  selectedBun && ingredientArr.push(selectedBun._id);
  selectedIngredients.forEach((ingredient) => {
    ingredientArr.push(ingredient._id);
  });

  const hahdleOpenPopupOrder = () => {
    dispatch(makeOrder(ingredientArr));
  };

  useEffect(() => {
    if (selectedBun && selectedIngredients.length > 0) {
      setIsOrder(true);
    }
  }, [selectedBun, selectedIngredients]);

  const totalSum =
    dropIngredientSuccess && selectedBun
      ? selectedBun.price * 2 +
        selectedIngredients?.reduce((sum, item) => sum + item.price, 0)
      : 0;

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
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
            className={styles.scrollBarWrapper}
          >
            {selectedIngredients.length > 0 &&
              selectedIngredients.map((item, index) => (
                <ConstructorFillingItem
                  index={index}
                  key={item.uniqId}
                  ingredient={item}
                  handleClose={() => handleDeleteItem(item.uniqId)}
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
        {selectedBun || selectedIngredients.length > 0 ? (
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
                onClick={hahdleOpenPopupOrder}
              >
                Оформить заказ
              </Button>
            ) : (
              <Button htmlType="submit" type="primary" size="large" disabled>
                Оформить заказ
              </Button>
            )}
          </div>
        ) : (
          <div className={styles.wrapper}>
            <p className={`${styles.recomendation} text text_type_main-medium`}>
              Перетащите ингредиенты для бургера сюда
            </p>
          </div>
        )}
      </section>

      {modalOpened && (
        <Modal closePopup={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;
