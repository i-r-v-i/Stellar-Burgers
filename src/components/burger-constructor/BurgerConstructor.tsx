import { useEffect, useState } from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/ConstructorItem";
import styles from "./BurgerConstructor.module.css";
import ConstructorFillingItem from "../constructor-filling-item/ConstructorFillingItem";
import { Modal } from "../modal/Modal";
import { OrderDetails } from "../order-details/OrderDetails";
import {
  ADD_ITEM,
  ADD_BUN,
  DELETE_ITEM,
  CLEAR_STATE,
} from "../../services/actions/burgerConstructor";
import { useDrop } from "react-dnd";
import { GET_NUMBER_FAILED, makeOrder } from "../../services/actions/order";
import { useNavigate } from "react-router-dom";
import {
  getStoreBurgerConstructor,
  getOrderNumber,
  getUser,
} from "../utils/constants";
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";
import { v4 as uuidv4 } from "uuid";
import { TConstructorElement } from "../../services/types/burgerConstructor";


const BurgerConstructor: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOrder, setIsOrder] = useState<boolean>(false);

  const { selectedIngredients, selectedBun, dropIngredientSuccess } =
    useAppSelector(getStoreBurgerConstructor);
  const { modalOpened } = useAppSelector(getOrderNumber);
  const { userData } = useAppSelector(getUser);

  const onDropBunHandler = (item: TConstructorElement) => {
    dispatch({ type: ADD_BUN, payload: {ingredient: item,
      uniqId: uuidv4() }
     });
  };

  const onDropIngredientHandler = (item: TConstructorElement) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };

  const handleDeleteItem = (uniqId: string) => {
    dispatch({ type: DELETE_ITEM, uniqId });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop: (item: TConstructorElement) => {
      item.ingredient.type === "bun"
        ? onDropBunHandler(item)
        : onDropIngredientHandler(item);
    },
  });

  const handleCloseModal = () => {
    dispatch({ type: GET_NUMBER_FAILED });
    dispatch({ type: CLEAR_STATE });
    // evt.stopPropagation();
  };

  const ingredientArr: string[] = [];
  selectedBun && ingredientArr.push(selectedBun.ingredient._id);
  selectedIngredients.forEach((ingredient) => {
    ingredientArr.push(ingredient.ingredient._id);
  });

  const hahdleOpenPopupOrder = () => {
    if (userData && selectedBun) {
      const result = [...ingredientArr];
      result.push(selectedBun.ingredient._id);
      dispatch(makeOrder(result));
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (selectedBun && selectedIngredients.length > 0) {
      setIsOrder(true);
    }
  }, [selectedBun, selectedIngredients]);

  const totalSum =
    dropIngredientSuccess && selectedBun
      ? selectedBun.ingredient.price * 2 +
        selectedIngredients?.reduce((sum, item) => sum + item.ingredient.price, 0)
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
            : undefined
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
              text={`${selectedBun.ingredient.name} (верх)`}
              price={selectedBun.ingredient.price}
              thumbnail={selectedBun.ingredient.image_mobile}
            />
          )}
          <div
            className={
              selectedIngredients.length > 5
                ? styles.scrollBarWrapper
                : styles.noScrollBar
            }
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
              text={`${selectedBun.ingredient.name} (низ)`}
              price={selectedBun.ingredient.price}
              thumbnail={selectedBun.ingredient.image_mobile}
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
