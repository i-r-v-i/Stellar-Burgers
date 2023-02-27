import {
  BurgerIcon,
  Logo,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";
import { NavLink } from "react-router-dom";

function AppHeader() {


  
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <nav className={`${styles.navList} pb-4 pt-4`}>
          <NavLink
            to="/"
            className={`${styles.link} pb-4 pt-4 pl-5 pr-5`}
            activeClassName={styles.link_active}
          >
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2">Конструктор</p>
          </NavLink>

          <NavLink
            to="#"
            className={`${styles.link} pb-4 pt-4 pl-5 pr-5`}
            activeClassName={styles.link_active}
          >
            <ListIcon type="primary" />
            <p className="text text_type_main-default pl-2">Лента заказов</p>
          </NavLink>
        </nav>
        <Logo />
        <div className={`${styles.account} pb-4 pt-4 pl-5 pr-5`}>
          <NavLink
            to= "/profile"
            className={styles.link}
            activeClassName={styles.link_active}
          >
            <ProfileIcon type="secondary" />
            <p className= "text text_type_main-default pl-2 pr-5">
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default AppHeader;
