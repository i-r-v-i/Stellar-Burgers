import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={`${styles.navList} pb-4 pt-4`}>
          <div className={`${styles.navItem} pb-4 pt-4 pl-5 pr-5`}>
            <a href="#" className={`${styles.active_color} `}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default pl-2">Конструктор</p>
            </a>
          </div>
          <div className={`${styles.navItem} pb-4 pt-4 pl-5 pr-5`}>
            <a href="#" className={`${styles.link} text_color_inactive`}>
              <ListIcon type="primary" />
              <p className="text text_type_main-default pl-2">Лента заказов</p>
            </a>
          </div>
        </nav>
        <Logo />
        <div
          className={`${styles.account} pb-4 pt-4 pl-5 pr-5 text_color_inactive`}
        >
          <a href="#" className={`${styles.link} text_color_inactive`}>
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default pl-2 pr-5">
              Личный кабинет
            </p>
          </a>
        </div>
      </div>
    </header>
  );
}
export default AppHeader;
