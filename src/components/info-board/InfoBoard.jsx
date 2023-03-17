import styles from "./InfoBoard.module.css";
import PropTypes from "prop-types";

export default function InfoBoard() {
  return (
    <section className={`${styles.gridContainer} pl-15`}>
      <div className={`${styles.ready}`}>
        <span className="text text_type_main-medium pb-6">Готовы:</span>
        <ul className={styles.orderList}>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={`${styles.readyItem} text text_type_digits-default pb-2`}
          >
            034533
          </li>
        </ul>
      </div>
      <div className={`${styles.inProcess}`}>
        <span className="text text_type_main-medium pb-6">В работе:</span>
        <ul className={styles.orderList}>
        <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
        <li
            className={` text text_type_digits-default pb-2 pr-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2`}
          >
            034533
          </li>
          <li
            className={` text text_type_digits-default pb-2`}
          >
            034533
          </li>
        </ul>
      </div>
      <div className={`${styles.all}`}>
      <p className="text text_type_main-medium">Выполнено&nbsp;за&nbsp;все&nbsp;время:</p>
      <p className="text text_type_digits-large">28&nbsp;750</p>
      </div>
      <div className={`${styles.today}`}>
      <p className="text text_type_main-medium">Выполнено&nbsp;за&nbsp;сегодня:</p>
      <p className="text text_type_digits-large">138</p>
      </div>
    </section>
  );
}
