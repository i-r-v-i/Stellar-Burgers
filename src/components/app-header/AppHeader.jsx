import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';


function AppHeader() {
    return (
      <header className={styles.header}>
        <nav className={ `${styles.header__nav} pb-4 pt-4` }>
            <div className= { `${styles.header__navItem } pb-4 pt-4 pl-5 pr-5` } >
            <BurgerIcon type="primary" className="pl-5"/>
            <p className="text text_type_main-default pl-2 pr-5">Конструктор</p>
            </div>
            <div className= { `${styles.header__navItem} pb-4 pt-4 pl-5 pr-5 text_color_inactive` } >
            <ListIcon type="primary" />
            <p className="text text_type_main-default pl-2">Лента заказов</p>
            </div>
        </nav>
        <Logo />
        <div className= { `${styles.header__account} pb-4 pt-4 pl-5 pr-5 text_color_inactive` }>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default pl-2 pr-5">Личный кабинет</p>
        </div>
    </header>
    )
}
export default AppHeader;