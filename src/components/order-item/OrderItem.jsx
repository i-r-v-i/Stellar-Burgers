import styles from "./OrderItem.module.css";
import PriceContainer from "../price-container/PriceContainer";
export default function OrderItem() {
  return (
    <li className={`${styles.element} pt-6 pb-6 pl-6 pr-6`}>
      <div className={styles.orderData}>
        <span className={`${styles.number} text text_type_digits-default`}>
          #3456670
        </span>
        <span className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </span>
      </div>
      <h2 className="text text_type_main-medium mt-5 mb-2">
        Black Hole Singularity острый бургер
      </h2>
      <div className={styles.ingredients}>
        <ul className={styles.ingredientsList}>
          {/* {selectedIngredients.map((ingredient, index) => {
              if (index < 6) {
                return (*/}
          <li className={styles.iconItem} style={{ zIndex: 6 - 0 }}>
            <img className={styles.icon} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
          </li>
          <li className={styles.iconItem} style={{ zIndex: 6 - 1 }}>
            <img
              className={styles.icon}
              src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
            />
          </li>
          <li className={styles.iconItem} style={{ zIndex: 6 - 2 }}>
            <img
              className={styles.icon}
              src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
            />
          </li>
          <li className={styles.iconItem} style={{ zIndex: 6 - 3 }}>
            <img
              className={styles.icon}
              src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
            />
          </li>
          {/* ) */}
          {/* })}
                        {index === 5 && (
                      <>
                        <div className={styles.orderBrief__imageOverlay}></div>
                        <span
                          className={`${styles.orderBrief__hiddenCount} text text_type_main-small`}
                        >{`+${hiddenImagesCount}`}</span>
                      </>
                    )}
          {/* </li>} */}
        </ul>
        <PriceContainer />
      </div>
      
    </li>
  );
}
