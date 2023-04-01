import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./profile.module.css";
import { logOut } from "../../services/actions/user";

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeLink = ({ isActive }) => ({
    color: isActive ? " #f2f2f3" : "#8585AD",
  });

  const handleLogout = () => {
    dispatch(logOut(navigate));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileSection}>
        <nav className={styles.profileList}>
          <NavLink
            end
            to="/profile"
            className={`${styles.link} text text_type_main-medium`}
            style={activeLink}
          >
            Профиль
          </NavLink>
          <NavLink
            end
            to="/profile/orders"
            className={`${styles.link} text text_type_main-medium`}
            style={activeLink}
          >
            История заказов
          </NavLink>
          <Button
            onClick={handleLogout}
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={`${styles.link} text text_type_main-medium`}
          >
            Выход
          </Button>
        </nav>
        <span className="text text_type_main-default text_color_inactive">
          В&nbsp;этом разделе вы&nbsp;можете изменить&nbsp;свои персональные
          данные
        </span>
      </div>
      <Outlet />
    </div>
  );
}
export default React.memo(ProfilePage);
