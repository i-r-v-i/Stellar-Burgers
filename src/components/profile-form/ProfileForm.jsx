import {
    Input,
    EmailInput,
    PasswordInput,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import Form from "../form/Form";
  import { useState, useRef } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import styles from "./ProfileForm.module.css";
  import {
    setNewUserData,
    IS_CHANGING,
    STOP_CHANGING } from '../../services/actions/user';
  
  export default function ProfileForm() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const name = useSelector((store) => store.user?.userData?.name);
    const email = useSelector((store) => store.user?.userData?.email);
    const isChanging = useSelector((state) => state.user?.isChanging);
    const [user, changeValue] = useState({
      name: name,
      email: email,
      password: "",
    });
  
    const onIconClick = (ref) => {
      ref.current.focus();
    };
  
    const onChange = (e) => {
      dispatch({ type: IS_CHANGING });
      changeValue({ ...user, [e.target.name]: e.target.value });
    };
  
    const canselChanging = () => {
      changeValue({ name: name, email: email });
      dispatch({ type: STOP_CHANGING });
    };

  
    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(setNewUserData(user));
      changeValue({ ...user, password: "" });
      dispatch({ type: STOP_CHANGING });
    };
  
    return (
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
            ref={inputRef}
            onIconClick={() => onIconClick(inputRef)}
          />
          <EmailInput
            onChange={onChange}
            value={user.email}
            name={"email"}
            placeholder="E-mail"
            icon={"EditIcon"}
            required
          />
          <PasswordInput
            onChange={onChange}
            value={user.password}
            name={"password"}
            icon={"EditIcon"}
          />
          {isChanging && (
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
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                onClick={onSubmit}
              >
                Сохранить
              </Button>
            </div>
          )}
        </Form>
    );
  }
  
