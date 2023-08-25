import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../form/Form";
import { useState, useRef, ChangeEvent, FormEventHandler } from "react";
import styles from "./ProfileForm.module.css";
import {
  setNewUserData,
  IS_CHANGING,
  STOP_CHANGING } from '../../services/actions/user';
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";
import { getUser } from "../utils/constants";

export default function ProfileForm() {
  const inputRef = useRef(null);
  const dispatch = useAppDispatch();
  const {userData, isChanging} = useAppSelector(getUser);
  
  const InitUserState = {
      name: userData?.name || "",
      email: userData?.email || "",
      password: userData?.password || "*".repeat(10),
  }

  const [user, changeValue] = useState(InitUserState);

  const onIconClick = (ref: any) => {
    ref.current.focus();
  };

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: IS_CHANGING });
    changeValue({ ...user, [e.target.name]: e.target.value });
    
  };

  const cancelChanging = () => {
    changeValue(InitUserState);
    dispatch({ type: STOP_CHANGING });
  };


  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(setNewUserData(user));
    changeValue({ ...user, password: "" });
    dispatch({ type: STOP_CHANGING });
  };

  return (
      <Form extraClass={styles.position} route='' route2='' isButton={false} onSubmit={onSubmit} buttonText="Отмена">
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
          required
        />
        <EmailInput
          onChange={onChange}
          value={user.email}
          name={"email"}
          placeholder="E-mail"
          isIcon={true}
          required
        />
        <PasswordInput
          onChange={onChange}
          value={user.password}
          name={"password"}
          icon={"EditIcon"}
          required
        />
        {isChanging && (
          <div className={styles.buttons}>
            <Button
              onClick={cancelChanging}
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
            >
              Сохранить
            </Button>
          </div>
        )}
      </Form>
  );
}

