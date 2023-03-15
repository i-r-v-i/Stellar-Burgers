import styles from "./FeedOrderDetails.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";

export default function FeedOrderDetails({ bac }) {
  // const { id } = useParams();
  const FeedOrderDetailsModal = () => {
    return null;
  };

  const FeedOrderDetailsRoute = () => {
    return (
      <section className={styles.wrapperRoute}>
        <div className={`${styles.routeStyle}`}>
          <h1 className={`${styles.number} text text_type_digits-default`}>
            #000340
          </h1>
          <h2 className="text text_type_main-medium mt-5 mb-2">
            Black Hole Singularity острый бургер
          </h2>
          <p className={`${styles.status} text text_type_main-small mb-15`}>
            Выполнен
          </p>
          <h3 className="text text_type_main-medium">Состав:</h3>
          <div className={styles.scrollWrapper}>
            <ul className={styles.ingredients}>
              <li className={styles.ingredient}>
                <img
                  className={styles.image}
                  src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  alt=""
                />
                <p className={`${styles.name} text text_type_main-default`}>
                  Флюоресцентная булка R2-D3
                </p>
                <div className={styles.priceContainer}>
                  <span className="text text_type_digits-default">{`${"2"} x ${30}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
              <li className={styles.ingredient}>
                <img
                  className={styles.image}
                  src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                  alt=""
                />
                <p className={`${styles.name} text text_type_main-default`}>
                  Филе Люминесцентного тетраодонтимформа
                </p>
                <div className={styles.priceContainer}>
                  <span className="text text_type_digits-default">{`${"1"} x ${300}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
              <li className={styles.ingredient}>
                <img
                  className={styles.image}
                  src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                  alt=""
                />
                <p className={`${styles.name} text text_type_main-default`}>
                Соус традиционный галактический
                </p>
                <div className={styles.priceContainer}>
                  <span className="text text_type_digits-default">{`${"1"} x ${300}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
              <li className={styles.ingredient}>
                <img
                  className={styles.image}
                  src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                  alt=""
                />
                <p className={`${styles.name} text text_type_main-default`}>
                Плоды фалленианского дерева
                </p>
                <div className={styles.priceContainer}>
                  <span className="text text_type_digits-default">{`${"1"} x ${300}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
              {/* <li className={styles.ingredient}>
                <img
                  className={styles.image}
                  src="https://code.s3.yandex.net/react/code/meat-01-mobile.png"
                  alt=""
                />
                <p className={`${styles.name} text text_type_main-default`}>
                  Филе Люминесцентного тетраодонтимформа
                </p>
                <div className={styles.priceContainer}>
                  <span className="text text_type_digits-default">{`${"1"} x ${300}`}</span>
                  <CurrencyIcon type="primary" />
                </div>
              </li> */}
            </ul>
          </div>
          <div className={styles.footer}>
              <p className="text text_type_main-default text_color_inactive">
                Вчера, 13:50 i-GMT+3 510
              </p>
              <div className={styles.priceContainer}>
                <span className="text text_type_digits-default">510</span>
                <CurrencyIcon type="primary" />
              </div>
            </div>
        </div>
      </section>
    );
  };

  return bac ? <FeedOrderDetailsModal /> : <FeedOrderDetailsRoute />;
}
