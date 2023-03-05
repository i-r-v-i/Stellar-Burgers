import {
  Input,
  EmailInput,
  PasswordInput,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../components/form/Form";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styles from "./profile.module.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/actions/user";

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user.userData)
 
  const [user, changeValue] = useState({ name: userData.name, email: userData.email, password: "" });

  const onChange = (e) => {
    changeValue({ ...user, [e.target.name]: e.target.value });
  };

  const canselChanging = () => {
    changeValue({...user});

  }

  const handleLogout = () => {
    dispatch(logOut(navigate));
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileSection}>
        <nav className={styles.profileList}>
          <NavLink
            to="/profile"
            className={`${styles.link} text text_type_main-medium`}
            style={({ isActive }) => ({
              color: isActive ? " #f2f2f3" : "#8585AD",
            })}
          >
            Профиль
          </NavLink>

          <NavLink
            to="/profile/orders"
            className={`${styles.link} text text_type_main-medium`}
            style={({ isActive }) => ({
              color: isActive ? " #f2f2f3" : "#8585AD",
            })}
          >
            История заказов
          </NavLink>

          <Button onClick={handleLogout}
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
      <Form extraClass={styles.position} button="false">
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={user.name}
          onChange={onChange}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          icon={"EditIcon"}
        />
        <EmailInput
          onChange={onChange}
          value={user.email}
          name={"email"}
          placeholder="E-mail"
          icon={"EditIcon"}
        />
        <PasswordInput
          onChange={onChange}
          value={user.password}
          name={"password"}
          icon={"EditIcon"}
        />
        {changeValue && (
          <div className={styles.buttons}>
          <Button
            onClick={canselChanging}
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.buttonSize}
            
          >
            Отмена
          </Button>
          <Button htmlType="submit" type="primary" size="medium">
            Сохранить
          </Button>
        </div>
      )}
      </Form>
    </div>
  );
}
