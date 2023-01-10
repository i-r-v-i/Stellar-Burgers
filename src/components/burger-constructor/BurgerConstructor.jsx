import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorList from "./constructor-list/ConstructorList";
import styles from "./BurgerConstructor.module.css";

function BurgerConstructor() {
  return (
    <section className={`${styles.burgerConstructor} mt-25`}>
      <ConstructorList />
      <div className={styles.ordering}>
        <div className={styles.sum}>
          <p className="text text_type_main-medium">4500</p>
          <div className={styles.scale}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;


